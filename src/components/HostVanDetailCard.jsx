import './HostVanDetailCard.css';
import classnames from 'classnames';

export default function HostVanDetailCard({
    showType = false, hostVan, className=''
}) {
    const vanType = (
        <div className={`${hostVan.type} selected`}>
            {hostVan.type}
        </div>
    )
    return (
        <div className={classnames('host-vans__card', className)}>
            <img src={hostVan.imageUrl} alt={`Image of ${hostVan.name}`}/>
            <div className='host-vans__card-detail'>
                { showType ? vanType : null }
                <h1>{hostVan.name}</h1>
                <p>${hostVan.price}/day</p>
            </div>
        </div>
    )
}
