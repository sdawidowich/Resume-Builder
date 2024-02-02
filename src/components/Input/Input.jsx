import { useState } from 'react';
import PropTypes from 'prop-types'
import './Input.css'

function Input({type, id, label, dataKey, on_change}) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    let newVal = e.target.value;
    setValue(newVal);
    on_change(dataKey, newVal);
  }

  return (
    <div className='input'>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} value={value} onChange={handleChange} data-key={dataKey} />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  dataKey: PropTypes.string,
  on_change: PropTypes.func,
};

Input.defaultProps = {
  type: "text"
};

export default Input;