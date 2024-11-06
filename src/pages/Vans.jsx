import React from 'react';
import Van from '../components/Van';
import './Vans.css';
import { Link } from 'react-router-dom';

export default function Vans() {
    const [vans, setVans] = React.useState([]);
    React.useEffect(() => {
        const fetchVans = async () => {
            const res = await fetch("/api/vans");
            const {vans: vansData} = await res.json();
            setVans(vansData);
        };
        fetchVans();
    }, [])
    const allVans = vans.map(van =>
        <Link key={van.id} to={`/vans/${van.id}`}>
            <Van van={van} />
        </Link>
    )
    return (
        <main className='vans-list-container'>
            <h1>Explore our van options</h1>
            <div className="vans-list">
                {allVans}
            </div>
        </main>
    )
}
