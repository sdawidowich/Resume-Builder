import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";

function InputSection({ heading, on_change }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function on_heading_click() {
    isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true);
  }

  return (
    <div className="input-section">
      <h3 onClick={on_heading_click}>{heading}</h3>
      <div className={"section-input" + (isCollapsed ? " collapsed" : "")}>
        <TextInput id="name" label="Full Name" dataKey="FullName" on_change={on_change} />
        <TextInput id="address" label="Address" dataKey="Address" on_change={on_change} />
        <TextInput id="phone" label="Phone Number" dataKey="Phone" on_change={on_change} />
        <TextInput id="email" label="Email" dataKey="Email" on_change={on_change} />
        <TextInput id="summary" label="Summary" dataKey="Summary" on_change={on_change} />
      </div>
    </div>
  );
}

InputSection.propTypes = {
  heading: PropTypes.string,
  on_change: PropTypes.func,
};

export default InputSection;
