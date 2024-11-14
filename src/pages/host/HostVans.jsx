import React from 'react';
import { getHostVans } from '../../api';
import { Link } from 'react-router-dom';
import HostVanDetailCard from '../../components/HostVanDetailCard'
import './HostVans.css';

export default function HostVans() {
    const [hostVans, setHostVans] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        const fetchHostVans = async () => {
            setLoading(true);
            try {
                const hostVans = await getHostVans();
                setHostVans(hostVans);
            } catch (e) {
                setError(e)
            }
            setLoading(false);
        }
        fetchHostVans();
    }, [])
    const hostVansElements = hostVans.map(hostVan => {
        return (
            <Link
                to={hostVan.id}
                key={hostVan.id}
                className='host-vans__card-link'
            >
                <HostVanDetailCard hostVan={hostVan} />
            </Link>
        )
    })

    if(loading) {
        return (<h2>Loading...</h2>)
    }

    if(error) {
        return <p style={{color: 'red', fontSize: '24px'}}>There was an Error: {error.message}</p>
    }

    return (
        <div className='host-vans'>
            <h1 className='host-vans__header'>Your listed vans</h1>
            <div className='host-vans__list'>
                {hostVansElements}
            </div>
        </div>
    )
}
