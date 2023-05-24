import './Rating.css'
import Star from '../Star/Star'

const Rating = ({ rating }) => {
      
    const stars = Array.from({length: 5}, (_,index ) =>{
        return <Star className="star" isActive={index >= rating ? false : true} key={index} />
    })

    return (
        <div className='rating'>
            <div className='rating__container'>
                {stars}
            </div>
        </div>
    )
}

export default Rating