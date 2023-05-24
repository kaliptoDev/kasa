import './Home.css'
// import data from '../../assets/Data/data.json'
import Card from '../../components/Card/Card'
import { useEffect, useState } from 'react'
import ErrorPage from '../ErrorPage/ErrorPage'
import Loading from '../../components/Loading/Loading'
import useFetchData from '../../utils/useFetchData'

const Home = () => {

    // useEffect(() => {
    // try / catch
    // fetch('../../assets/Data/data.json')
    // }, [???])
    let data = null

    // const [data, setData] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const { data, error, isLoaded } = useFetchData('./Data/data.json')
    // const adress = 'src\assets\Data\data.json'

    // useEffect( () => {
    //     setIsLoading(true);
    //     async function fetchData () {
    //         try {
    //         const reponse = await fetch('../../assets/Data/data.json')
    //         const data = await reponse.json()
    //         setData(data)
    //         console.log(data)
    //     } catch (error) {
    //         alert('Erreur :' + error)
    //         return <ErrorPage />
    //     }
    //     }
    //     fetchData()
        
    //     setIsLoading(false);

    // }, []);

    useEffect(() => {
        document.title = 'Kasa - Accueil'
    }, [])


    return (

        <div className="home">
            <div className="home__container">
                <div className='home__image'>
                    <div className='home__container__largeImage' />
                    <h1 className='title'>Chez vous, partout et ailleurs</h1>
                </div>



            </div>
            <div className='home__container__cards'>
                {data? data.map((card, index) => {
                    return <Card id={card.id} image={card.cover} title={card.title} key={index}/>
                }) : <Loading />}

            </div>

        </div>

    )
}

export default Home