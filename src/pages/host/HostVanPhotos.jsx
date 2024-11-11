import './HostVanPhotos.css';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPhotos() {
    const hostVan = useOutletContext();
    return (
        <div className='host-van-photos'>
            <img
                src={hostVan.imageUrl}
                alt={`Image of ${hostVan.name}`}
            />
        </div>
    )
}
