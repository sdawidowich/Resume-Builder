import { useState } from "react";
import PropTypes from "prop-types";
import './InputSection.css'

function InputSection({ heading, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function on_heading_click() {
    isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true);
  }

  return (
    <div className="input-section">
      <h3 onClick={on_heading_click}>{heading}</h3>
      <div className={"section-input" + (isCollapsed ? " collapsed" : "")}>
        {children}
      </div>
    </div>
  );
}

InputSection.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.element
};

export default InputSection;
