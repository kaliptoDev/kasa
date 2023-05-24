import './Logo.css'
import { ReactComponent as LogoSVG } from '../../../assets/Logo/logo.svg';

const Logo = () => {
    return (
        <div className="logo">
            <a href='/' title="Retourner à l'accueil">
            <LogoSVG className="logo__svg" />
            </a>
        </div>
    );

}

export default Logo 