import { useState } from 'react';
import PropTypes from 'prop-types'
import './Input.css'

function Input({type, id, label, placeholder, value, dataKey, on_change}) {
  const [inputValue, setInputValue] = useState(value);

  function handleChange(e) {
    let newVal = e.target.value;
    setInputValue(newVal);
    on_change(dataKey, newVal);
  }

  return (
    <div className='input'>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} value={inputValue} placeholder={placeholder} onChange={handleChange} data-key={dataKey} />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  dataKey: PropTypes.string,
  on_change: PropTypes.func,
};

Input.defaultProps = {
  type: "text",
  value: ""
};

export default Input;