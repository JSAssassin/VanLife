import { useOutletContext } from 'react-router-dom';
import './HostVanPricing.css';

export default function HostVanPricing() {
    const hostVan = useOutletContext();
    return (
        <h1 className='host-van-pricing'>${hostVan.price}<span>/day</span></h1>
    )
}
