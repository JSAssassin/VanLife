import './van.css';

export default function Van({
    name, price, type, imageUrl, description, singleView
}) {
    return (
        <div className="van">
            <figure className='van__img-container'>
                <img
                    src={imageUrl}
                    alt={`Image of ${name}`}
                    className="van__img"
                />
            </figure>
            <div className="van__info">
                <h2 className="van__name">{name}</h2>
                <div className="van__price-container">
                    <p className='van__price'>${price}</p>
                    <span>/day</span>
                </div>
            </div>
            <div className={`van__type ${type} selected`}>{type}</div>
            {singleView && <p className="van__desc">{description}</p>}
            {singleView && <button className="van__rent-btn">Rent this van</button>}
        </div>
    )
}
