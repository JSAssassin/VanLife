import React from 'react';
import { getHostVans } from '../../api';
import { Link } from 'react-router-dom';
import HostVanDetailCard from '../../components/HostVanDetailCard'
import './HostVans.css';

export default function HostVans() {
    const [hostVans, setHostVans] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const user = localStorage.getItem("user");

    React.useEffect(() => {
        const fetchHostVans = async () => {
            setLoading(true);
            try {
                const hostVans = await getHostVans({
                    hostId: JSON.parse(user).id
                });
                setHostVans(hostVans);
            } catch (e) {
                setError(e)
            }
            setLoading(false);
        }
        fetchHostVans();
    }, [user])
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
        <div className='host-vans'>
            <h1 className='host-vans__header'>Your listed vans</h1>
            <div className='host-vans__list'>
                {hostVansElements}
            </div>
        </div>
    )
}
