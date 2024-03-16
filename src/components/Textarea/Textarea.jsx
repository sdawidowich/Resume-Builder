import { useState } from 'react';
import PropTypes from 'prop-types'
import './Textarea.css'

function Textarea({id, label, placeholder, value, dataKey, on_change}) {
  const [inputValue, setInputValue] = useState(value);

  function handleChange(e) {
    let newVal = e.target.value;
    setInputValue(newVal);
    on_change(dataKey, newVal);
  }

  return (
    <div className='input textarea'>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} value={inputValue} placeholder={placeholder} onChange={handleChange} data-key={dataKey} />
    </div>
  )
}

Textarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  dataKey: PropTypes.string,
  on_change: PropTypes.func,
};

Textarea.defaultProps = {
  value: ""
};

export default Textarea;