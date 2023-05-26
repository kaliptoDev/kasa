import './Carousel.css'
import { useState } from 'react'
import Arrow from '../Arrow/Arrow'

const Carousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'left') {
            currentImage === 0 ? setCurrentImage(images.length - 1) : setCurrentImage(currentImage - 1)
        } else {
            currentImage === images.length - 1 ? setCurrentImage(0) : setCurrentImage(currentImage + 1)
        }
    }

    return (
        <div className='carousel'>
            <div className='carousel__container'>
                {images.length > 1 ?
                    <div
                        className='carousel__container__arrow carousel__container__arrow__left'
                        onClick={() => handleClick('left')}
                    >
                        <Arrow onClick={() => handleClick('left')} />
                    </div> : null}
                <div className='carousel__container__image' style={{ backgroundImage: `url(${images[currentImage]}` }} />
                {images.length > 1 ?
                    <div
                        className='carousel__container__arrow carousel__container__arrow__right'
                        onClick={() => handleClick('right')}
                    >
                        <Arrow onClick={() => handleClick('right')} />
                    </div> : null}
            </div>
            <div className='carousel__container__counter'>
                <span className='carousel__container__counter__span'>{currentImage + 1}/{images.length}</span>
            </div>
        </div>
    )
}

export default Carousel