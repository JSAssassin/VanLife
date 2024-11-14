import { Outlet, useParams } from 'react-router-dom';
import { getHostVan } from '../api';
import BackLink from './BackLink';
import HostVanDetailCard from './HostVanDetailCard';
import HostVanDetailHeader from './HostVanDetailHeader';
import React from 'react';
import './HostVanDetailLayout.css';

const HostVanDetailContext = React.createContext();

export default function HostVanDetailLayout() {
    const { id: vanId } = useParams();
    const [hostVan, setHostVan] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchHostVan = async () => {
            setLoading(true);
            try {
                const hostVan = await getHostVan(vanId);
                setHostVan(hostVan);
            } catch (e) {
                setError(e)
            }
            setLoading(false);
        }
        fetchHostVan();
    }, [vanId])

    if(loading) {
        return <h2 className='loading' aria-live='polite'>Loading...</h2>
    }

    if(error) {
        return (
            <p className='error' aria-live='assertive'>
                There was an Error: {error.message}
            </p>
        )
    }

    return (
        <div className='host-van-detail-layout'>
            <BackLink />
            <HostVanDetailCard
                showType={true}
                hostVan={hostVan}
                className='host-vans__card-detail-layout'
            />
            <HostVanDetailHeader hostVan={hostVan} />
            <Outlet context={hostVan} />
        </div>
    );
}

export { HostVanDetailContext };
