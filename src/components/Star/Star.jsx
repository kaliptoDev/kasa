import './Star.css'
import { ReactComponent as StarSVG } from '../../assets/Star/star.svg'

const Star = ({ isActive }) => {
    return (
        <div className='star'>
            <StarSVG className={isActive ? 'star__active' : 'star__inactive'} />
        </div>
    )

}

export default Star