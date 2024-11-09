import classnames from 'classnames';
import './HostVanDetailCard.css';

export default function HostVanDetailCard({
    showType = false, hostVan, className=''
}) {
    const vanType = (
        <div className={`host-vans__type ${hostVan.type} selected`}>
            {hostVan.type}
        </div>
    )
    return (
        <div className={classnames('host-vans__card', className)}>
            <img src={hostVan.imageUrl} alt={`Image of ${hostVan.name}`}/>
            <div className='host-vans__card-detail'>
                { showType ? vanType : null }
                <h1>{hostVan.name}</h1>
                <p>${hostVan.price}<span>/day</span></p>
            </div>
        </div>
    )
}
