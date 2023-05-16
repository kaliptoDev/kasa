import './Home.css'
import data from '../../assets/Data/data.json'
import Card from '../Card/Card'

const Home = () => {

    

    return (

        <div className="home">
            <div className="home__container">
                <div className='home__image'>
                    <div className='home__container__largeImage' />
                    <h1 className='title'>Chez vous, partout et ailleurs</h1>
                </div>



            </div>
            <div className='home__container__cards'>
                {data.map((card, index) => {
                    
                    return <Card id={card.id} image={card.cover} title={card.title} key={index}/>
                })}

            </div>

        </div>

    )
}

export default Home