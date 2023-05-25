import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ id, image, title}) => {
    
    return (
        <div className='card__container'>                
            <div className='card__image_container'>
                <div className="card" style={image ? { backgroundImage: "url(" + image + ")", backgroundPosition: "center center", backgroundSize: "cover" } : null}>
                <Link to={`/fiche-logement/${id}`} className='card__link' />
                </div>
            </div >
            <h2 className='cardTitle' >{title}</h2>
        </div>
    )

}

export default Card