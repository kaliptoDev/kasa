import './Home.css'
import Card from '../../components/Card/Card'
import { useContext, useEffect, useState } from 'react'
import Loading from '../../components/Loading/Loading'
import { DataContext } from '../../Context/DataContext'

const Home = () => {
    
    const [data, setData] = useState(null);

    const res = useContext(DataContext)
    
    useEffect(() => {
        document.title = 'Kasa - Accueil'
    }, [])

    useEffect(() => {
        setData(res)
    }, [res])


    return (

        <div className="home">
            <div className="home__container">
                <div className='home__image'>
                    <div className='home__container__largeImage' />
                    <h1 className='title'>Chez vous, partout et ailleurs</h1>
                </div>

            </div>
            <div className='home__container__cards'>
                {data ? data.map((card, index) => {
                    return <Card id={card.id} image={card.cover} title={card.title} key={index} fiche={card} />
                }) : <Loading />
                }

            </div>

        </div>

    )
}

export default Home