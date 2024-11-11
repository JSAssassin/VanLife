import { Outlet, useParams } from 'react-router-dom';
import BackLink from './BackLink';
import HostVanDetailCard from './HostVanDetailCard';
import HostVanDetailHeader from './HostVanDetailHeader';
import React from 'react';
import './HostVanDetailLayout.css';

const HostVanDetailContext = React.createContext();

export default function HostVanDetailLayout() {
    const { id: vanId } = useParams();
    const [hostVan, setHostVan] = React.useState({});
    React.useEffect(() => {
        fetch(`/api/host/vans/${vanId}`)
            .then(res => res.json())
            .then(data => setHostVan(data.vans))
    }, [vanId])
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
