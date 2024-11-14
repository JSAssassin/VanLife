import { useParams } from 'react-router-dom';
import { getVan } from '../../api';
import BackLink from '../../components/BackLink';
import React from 'react';
import Van from '../../components/Van';
import './VanDetail.css';

export default function VanDetail() {
    const {id: vanId} = useParams();
    const [van, setVan] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchVan = async () => {
            setLoading(true);
            try {
                const van = await getVan(vanId);
                setVan(van)
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        }
        fetchVan();
    }, [vanId]);

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
        <div className="van-detail-container">
            <BackLink />
            {van && <Van isDetailView={true} van={van}/>}
        </div>
    )
}
