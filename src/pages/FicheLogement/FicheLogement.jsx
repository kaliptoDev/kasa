import './FicheLogement.css'
import data from '../../assets/Data/data.json'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Carousel from '../../components/Carousel/Carousel.jsx'
import Tag from '../../components/Tag/Tag.jsx'
import Dropdown from '../../components/Dropdown/Dropdown';
import Profile from '../../components/Profile/Profile';
import Rating from '../../components/Rating/Rating';


const FicheLogement = () => {
    const {id} = useParams();

    // pas bô !
    const fiche = data.filter((ficheLogement) => ficheLogement.id === id)

        document.title = `Kasa - ${fiche[0].title}`

    return (

        <div className='ficheLogement'>
            <div className='ficheLogement__Carousel'>
                <Carousel images={fiche[0].pictures} />
            </div>

            <div className='ficheLogement__container'>
                <div className='ficheLogement__container__description'>
                    <h1 className='ficheLogement__title'>{fiche[0].title}</h1>
                    <h2 className='ficheLogement__location'>{fiche[0].location}</h2>
                    <div className='ficheLogement__container__tags'>
                        {fiche[0].tags.map((tag, index) => (
                            <Tag key={index} text={tag} />
                        ))}
                    </div>
                </div>
                <div className='ficheLogement__container__secondary'>
                    <div className='ficheLogement__container__profile'>
                        <Profile host={fiche[0].host} />
                    </div>
                    <div className='ficheLogement__container__rating'>
                        <Rating rating={fiche[0].rating} />
                    </div>
                </div>

            </div>

            <div className='ficheLogement__infos'>
                <Dropdown text='Description' list={fiche[0].description} />
                <Dropdown text='Equipements' list={fiche[0].equipments} />
            </div>

        </div>
    )


}

export default FicheLogement