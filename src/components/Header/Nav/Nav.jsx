import './Nav.css'
import Link from './Link/Link.jsx'

const Nav = () => {

    const links = [
        { text: 'Accueil', url: '/' },
        { text: 'A Propos', url: '/a-propos' }
    ]

    return (
        <nav className="nav">
            <ul className="nav__list">
                {links.map((link, index) => {
                    return (
                        <Link key={index} text={link.text} url={link.url} />
                    );
                })}
            </ul>
        </nav>
    );

}

export default Nav