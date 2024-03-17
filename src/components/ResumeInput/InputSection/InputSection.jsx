import { useState } from "react";
import PropTypes from "prop-types";
import chevron from "../../../assets/icons/chevron.svg";
import './InputSection.css';

function InputSection({ heading, icon, icon_alt, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function on_heading_click() {
    isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true);
  }

  return (
    <div className="input-section">
      <div className="heading" onClick={on_heading_click}>
        <img className="section-icon" src={icon} alt={icon_alt} />
        <h3 className="heading">{heading}</h3>
        <img className={"chevron" + (isCollapsed ? "" : " expanded-icon")} src={chevron} alt="Chevron Icon" />
      </div>
      <div className={"section-input" + (isCollapsed ? " collapsed" : "")}>
        {children}
      </div>
    </div>
  );
}

InputSection.propTypes = {
  heading: PropTypes.string,
  icon: PropTypes.string,
  icon_alt: PropTypes.string,
  children: PropTypes.element
};

export default InputSection;
