import './Card.css'

const Card = ({ id, image, title}) => {
    return (
        <div className='card__container'>
            <a href={`/fiche-logement/${id}`} className='card__link'>
            <div className='card__image_container'>
                <div className="card" style={image ? { backgroundImage: "url(" + image + ")", backgroundPosition: "center center", backgroundSize: "cover" } : null}>
                </div>
            </div >
            <h2 className='cardTitle' >{title}</h2>
            </a>
        </div>
    )

}

export default Card