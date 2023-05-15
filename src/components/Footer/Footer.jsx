import './Footer.css'
import { ReactComponent as LogoSVG } from '../../assets/Logo/logo.svg';

const Footer = () => {
    return (
        <div className="footer">
            <LogoSVG className="footer__logo"/>
            <div className="footer__credits">
                <span className='credits'>© 2020 Kasa. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer