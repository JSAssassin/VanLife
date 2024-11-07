import React from 'react';
import { Link } from 'react-router-dom';
import './HostVans.css';

export default function HostVans() {
    const [hostVans, setHostVans] = React.useState([]);
    React.useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
    }, [])
    const hostVansElements = hostVans.map(hostVan => {
        return (
            <Link
                to={`/host/vans/${hostVan.id}`}
                key={hostVan.id}
                className='host-vans__card'
            >
                <img src={hostVan.imageUrl} alt={`Image of ${hostVan.name}`}/>
                <div className='host-vans__card-detail'>
                    <h1>{hostVan.name}</h1>
                    <p>${hostVan.price}/day</p>
                </div>
            </Link>
        )
    })
    return (
        <div className='host-vans'>
            <h1 className='host-vans__header'>Your listed vans</h1>
            <div className='host-vans__list'>
                {hostVansElements}
            </div>
        </div>
    )
}
