import "./Dropdown.css";
import { ReactComponent as ArrowSVG } from '../../../assets/Arrow/normalArrow.svg';
import { useState } from "react";


const Dropdown = ({ text, list, size }) => {

    const [clicked, setClicked] = useState(false);

    const hidden = { display: clicked ? "block" : "none" };
    const rotate = { transform: clicked ? "rotate(0deg)" : "rotate(180deg)" };

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <div className="dropdown">
            <div className="dropdown__title" onClick={handleClick}>
                <span className="dropdown_span">{text}</span>
                <div className="dropdown__arrow" style={rotate}>
                    <ArrowSVG />
                </div>
            </div>
            <div className="dropdown__list" style={hidden}>
                {list.map((item, index) => (
                    <div key={index} className="dropdown__item">
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dropdown;