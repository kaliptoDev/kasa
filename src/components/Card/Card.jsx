import './Card.css'

const Card = ({ image, title }) => {

    return (
        <div className="card" style={image ? { backgroundImage: "url(" + image + ")", backgroundPosition: "center center", backgroundSize: "cover" } : null}>
            <span className='cardTitle' >{title}</span>
        </div >
    )

}

export default Card