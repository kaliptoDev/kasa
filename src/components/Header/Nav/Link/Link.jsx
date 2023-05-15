import './Link.css'

const Link = ({ text, url }) => {
  
    return (
        <a className="nav__link" href={url}>{text}</a>
    );
}

export default Link