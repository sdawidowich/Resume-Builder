import { useState } from 'react';
import PropTypes from 'prop-types'
import './TextInput.css'

function TextInput({id, label, dataKey, on_change}) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    let newVal = e.target.value;
    setValue(newVal);
    on_change(dataKey, newVal);
  }

  return (
    <div className='textInput'>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} value={value} onChange={handleChange} data-key={dataKey} />
    </div>
  )
}

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  dataKey: PropTypes.string,
  on_change: PropTypes.func,
}


export default TextInput;