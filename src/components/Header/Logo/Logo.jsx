import './Logo.css'
import { ReactComponent as LogoSVG } from '../../../assets/Logo/logo.svg';

const Logo = () => {
    return (
        <div className="logo">
            <LogoSVG className="logo__svg" />
        </div>
    );

}

export default Logo 