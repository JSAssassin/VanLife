import { HostVanDetailContext } from '../../components/HostVanDetailLayout';
import React from 'react';
import './HostVanDetails.css';

export default function HostVanDetails() {
    const hostVan = React.useContext(HostVanDetailContext);
    return (
        <div className='host-van-details'>
            <p><span>Name:</span> {hostVan.name}</p>
            <p><span>Category:</span> {hostVan.type ? `${hostVan.type[0].toUpperCase()}${hostVan.type.slice(1)}` : ''}</p>
            <p><span>Description:</span> {hostVan.description}</p>
            <p><span>Visibility:</span> Public</p>
        </div>
    )
}
