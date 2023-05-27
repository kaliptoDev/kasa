import "./Dropdown.css";
import { ReactComponent as ArrowSVG } from '../../assets/Arrow/normalArrow.svg';
import { useState } from "react";


const Dropdown = ({ text, list, size, position }) => {

    const [isOpen, setIsOpen] = useState(false);

    // const hidden = { display: clicked ? "block" : "none" };
    const hidden = isOpen ? { maxHeight: "400px" } : { maxHeight: "0", padding: "0 20px", overflow: "hidden" };
    const rotate = { transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" };

    let customStyling = null;

    if (size === "large" && window.innerWidth > 830) {
        customStyling = {
            maxWidth: "82.5%",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "34px"
        };
    }
    else if (size === "mobile") {
        customStyling = { maxWidth: "100%" };
    }

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`dropdown ${position}`} style={customStyling ? customStyling : null}>
            <div className="dropdown__title" onClick={handleClick}>
                <span className="dropdown_span">{text}</span>
                <div className="dropdown__arrow" style={rotate}>
                    <ArrowSVG />
                </div>
            </div>
            <div className="dropdown__list" style={hidden}>
                {Array.isArray(list) ? list.map((item, index) => (
                    <div key={index} className="dropdown__item">
                        <span>{item}</span>
                    </div>
                )) : <div className="dropdown__item"> {list}
                </div>}
            </div>
        </div>
    );
}

export default Dropdown;