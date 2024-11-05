import './Van.css';

export default function Van({ van, isDetailView = false }) {
    const vanType = (
        <div className={`${van.type} selected ${ isDetailView ? 'van__type-detailed': 'van__type'}`}>
            {van.type}
        </div>
    )
    return (
        <div className="van">
            <figure
                className={
                    `van__img-container ${isDetailView ? 'van__img-container-detailed' : ''}`
                }
            >
                <img
                    src={van.imageUrl}
                    alt={`Image of ${van.name}`}
                    className="van__img"
                />
            </figure>
            {isDetailView && vanType}
            <div className={
                `${isDetailView ? 'van__info-detailed' : 'van__info'}`
            }>
                <h2 className={`${isDetailView ? 'van__name-detailed' : 'van__name'}`}>{van.name}</h2>
                <div className={`${isDetailView ? 'van__price-container-detailed' : 'van__price-container'}`}>
                    <p className={`${isDetailView ? 'van__price-detailed' : 'van__price'}`}>${van.price}</p>
                    <span>/day</span>
                </div>
            </div>
            {!isDetailView && vanType}
            {isDetailView && (
                <>
                    <p className="van__desc">{van.description}</p>
                    <button className="van__rent-btn">Rent this van</button>
                </>
            )}
        </div>
    )
}
