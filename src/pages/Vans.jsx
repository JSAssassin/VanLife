import React from 'react';
import Van from './Van';
import './Vans.css';

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
        <Van
            key={van.id}
            imageUrl={van.imageUrl}
            name={van.name}
            price={van.price}
            type={van.type}
            singleView={false}
        />
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
