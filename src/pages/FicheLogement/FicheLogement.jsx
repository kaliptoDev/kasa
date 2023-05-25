import './FicheLogement.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../Context/DataContext'
import Carousel from '../../components/Carousel/Carousel.jsx'
import Tag from '../../components/Tag/Tag.jsx'
import Dropdown from '../../components/Dropdown/Dropdown';
import Profile from '../../components/Profile/Profile';
import Rating from '../../components/Rating/Rating';



const FicheLogement = () => {
    const { id } = useParams();

    const [fiche, setFiche] = useState(null);

    const data = useContext(DataContext)
    useEffect(() => {
        setFiche(data ? data.filter((ficheLogement) => ficheLogement.id === id)[0] : null)
    }, [data])

    useEffect(() => {
        document.title = fiche ? `Kasa - ${fiche.title}` : 'Kasa - Fiche logement'
    }, [fiche])

    return (

        <div className='ficheLogement'>
            <div className='ficheLogement__Carousel'>
                <Carousel images={fiche ? fiche.pictures : null} />
            </div>

            <div className='ficheLogement__container'>
                <div className='ficheLogement__container__description'>
                    <h1 className='ficheLogement__title'>{fiche ? fiche.title : null}</h1>
                    <h2 className='ficheLogement__location'>{fiche ? fiche.location : null}</h2>
                    <div className='ficheLogement__container__tags'>
                        {fiche ? fiche.tags.map((tag, index) => (
                            <Tag key={index} text={tag} />
                        )) : null}
                    </div>
                </div>
                <div className='ficheLogement__container__secondary'>
                    <div className='ficheLogement__container__profile'>
                        <Profile host={fiche ? fiche.host : null} />
                    </div>
                    <div className='ficheLogement__container__rating'>
                        <Rating rating={fiche ? fiche.rating : null} />
                    </div>
                </div>

            </div>

            <div className='ficheLogement__infos'>
                <Dropdown text='Description' list={fiche ? fiche.description : null} />
                <Dropdown text='Equipements' list={fiche ? fiche.equipments : null} />
            </div>

        </div>
    )


}

export default FicheLogement