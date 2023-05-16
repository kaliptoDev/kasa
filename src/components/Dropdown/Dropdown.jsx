import "./Dropdown.css";
import { ReactComponent as ArrowSVG } from '../../assets/Arrow/normalArrow.svg';
import { useState } from "react";


const Dropdown = ({ text, list, size, position }) => {

    const [clicked, setClicked] = useState(false);

    // const hidden = { display: clicked ? "block" : "none" };
    const hidden = clicked ? {maxHeight: "400px"} : { maxHeight: "0", padding: "0 20px", overflow: "hidden"};
    const rotate = { transform: clicked ? "rotate(0deg)" : "rotate(180deg)" };

    let customStyling = null;

    if (size === "large") {
        customStyling = {
            maxWidth: "82.5%",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "24px", 
            lineHeight: "34px"  };
    }
    else if (size === "mobile") {
        customStyling = { maxWidth: "100%" };
    }

    const handleClick = () => {
        setClicked(!clicked)
    }
    //style={styling}
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
                )) : list}
            </div>
        </div>
    );
}

export default Dropdown;