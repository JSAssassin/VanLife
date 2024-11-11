import { HostVanDetailContext } from '../../components/HostVanDetailLayout';
import React from 'react';
import './HostVanPricing.css';

export default function HostVanPricing() {
    const hostVan = React.useContext(HostVanDetailContext);
    return (
        <h1 className='host-van-pricing'>${hostVan.price}<span>/day</span></h1>
    )
}
