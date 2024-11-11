import { HostVanDetailContext } from '../../components/HostVanDetailLayout';
import React from 'react';
import './HostVanPhotos.css';

export default function HostVanPhotos() {
    const hostVan = React.useContext(HostVanDetailContext);
    return (
        <div className='host-van-photos'>
            <img
                src={hostVan.imageUrl}
                alt={`Image of ${hostVan.name}`}
            />
        </div>
    )
}
