
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api";
import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
    const user = localStorage.getItem('user');
    const {id, name, earnings, reviewScore} = JSON.parse(user);
    const [vans, setVans]  = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        setLoading(true)
        getHostVans({hostId: id})
            .then(data => {
                setVans(data)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [id]);

    if(error) {
        return (
            <p className='error' aria-live='assertive'>
                There was an Error: {error.message}
            </p>
        )
    }

    function renderVanElements(vans) {
        const dashboardHostVansEls = vans.slice(-2).map(van => (
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
                <Link to={`vans/${van.id}`}>View</Link>
            </div>
        ))
        return (
            <section className="host-vans-list">{dashboardHostVansEls}</section>
        )
    }
    return (
        <div>
            <section className="host-dashboard__earnings">
                <div className="host-dashboard__earnings-info">
                    <h1>Welcome, {name}!</h1>
                    <p>Your total income in year <strong style={{textDecoration: 'underline'}}>{(new Date).getFullYear()}</strong></p>
                    <h2>${earnings}</h2>
                </div>
            </section>
            <section className="host-dashboard__reviews">
                <h2>Review score</h2>
                <div className="host-dashboard__reviews-score">
                    <BsStarFill className="star" />
                    <p>
                        <strong>{reviewScore}</strong>/5
                    </p>
                </div>
            </section>
            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans">View all</Link>
                </div>
                {
                    loading && !vans
                    ? <h1>Loading...</h1>
                    : (
                        <>
                            {renderVanElements(vans)}
                        </>
                    )
                }
            </section>
        </div>
    )
}
