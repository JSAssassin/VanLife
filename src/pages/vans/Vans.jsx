import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';
import React from 'react';
import Van from '../../components/Van';
import './Vans.css';

export default function Vans() {
    const [vans, setVans] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type");
    React.useEffect(() => {
        setLoading(true);
        const fetchVans = async () => {
            try {
                const vansData = await getVans();
                setVans(vansData);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };
        setLoading(false);
        fetchVans();
    }, []);
    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans;
    const allVans = displayedVans.map(van =>
        <Link
            key={van.id}
            to={van.id}
            state={{
                search: `?${searchParams.toString()}`,
                type: typeFilter
            }}
        >
            <Van van={van} />
        </Link>
    )
    const handleFilterChange = (key, value) => {
        setSearchParams(prevParams => {
            if(value ===  null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        })
    }

    if(loading) {
        return <h2 className='loading'>Loading...</h2>
    }

    if(error) {
        return (
            <p className='error'>
                There was an Error: {error.message}
            </p>
        )
    }

    return (
        <main className='vans-list-container'>
            <h1>Explore our van options</h1>
            <div className="van-list-filter-btns">
                <button
                    onClick={() => handleFilterChange('type', 'simple')}
                    className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}
                >
                    Simple
                </button>
                <button
                    onClick={() => handleFilterChange('type', 'luxury')}
                    className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}
                >
                    Luxury
                </button>
                <button
                    onClick={() => handleFilterChange('type', 'rugged')}
                    className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}
                >
                    Rugged
                </button>
                {typeFilter && <button
                    onClick={() => setSearchParams({})}
                    className='van-type clear-filters'
                >
                    Clear filters
                </button>}
            </div>
            <div className="vans-list">
                {allVans}
            </div>
        </main>
    )
}
