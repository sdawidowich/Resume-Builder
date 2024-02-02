import { useState } from 'react';
import PropTypes from 'prop-types'
import './Textarea.css'

function Textarea({id, label, dataKey, on_change}) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    let newVal = e.target.value;
    setValue(newVal);
    on_change(dataKey, newVal);
  }

  return (
    <div className='input textarea'>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} value={value} onChange={handleChange} data-key={dataKey} />
    </div>
  )
}

Textarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  dataKey: PropTypes.string,
  on_change: PropTypes.func,
};

export default Textarea;