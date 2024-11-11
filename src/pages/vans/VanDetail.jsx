import { useParams } from 'react-router-dom';
import BackLink from '../../components/BackLink';
import React from 'react';
import Van from '../../components/Van';
import './VanDetail.css';

export default function VanDetail() {
    const {id: vanId} = useParams();
    const [van, setVan] = React.useState(null);
    React.useEffect(() => {
        fetch(`/api/vans/${vanId}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [vanId])
    return (
        <div className="van-detail-container">
            <BackLink />
            {van && <Van isDetailView={true} van={van}/>}
        </div>
    )
}
