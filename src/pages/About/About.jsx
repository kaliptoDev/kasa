import './About.css'
import Dropdown from '../../components/Dropdown/Dropdown'
import { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        document.title = 'Kasa - A Propos'
    }, [])

    const firstTitle = "Fiabilité"
    const secondTitle = "Respect"
    const thirdTitle = "Service"
    const fourthTitle = "Sécurité"

    const firstDesc = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const secondDesc = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const thirdDesc = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const fourthDesc = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

    return (

        <div className="about">
            <div className="about__image__container">
                <div className="about__image">

                </div>
            </div>
            <div className="about__container">
                <Dropdown text={firstTitle} list={firstDesc} size={"large"} position={"topStyle"}/>
                <Dropdown text={secondTitle} list={secondDesc} size={"large"} position={"middleStyle"}/>
                <Dropdown text={thirdTitle} list={thirdDesc} size={"large"} position={"middleStyle"}/>
                <Dropdown text={fourthTitle} list={fourthDesc} size={"large"} position={"bottomStyle"}/>
            </div>
        </div>

    )

}

export default About