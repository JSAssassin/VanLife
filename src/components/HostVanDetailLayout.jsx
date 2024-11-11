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
            .then(data => setHostVan(data.vans[0]))
    }, [vanId])
    return (
        <HostVanDetailContext.Provider value={hostVan}>
            <div className='host-van-detail-layout'>
                <BackLink linkTo='/host/vans'/>
                <HostVanDetailCard
                    showType={true}
                    hostVan={hostVan}
                    className='host-vans__card-detail-layout'
                />
                <HostVanDetailHeader hostVan={hostVan} />
                <Outlet />
            </div>
        </HostVanDetailContext.Provider>
    );
}

export { HostVanDetailContext };
