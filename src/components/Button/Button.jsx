import PropTypes from 'prop-types'
import './Button.css'

function Button({id, text, dataKey, on_click}) {
  return (
    <button className='button' id={id} onClick={on_click} data-key={dataKey}>{text}</button>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  dataKey: PropTypes.string,
  on_click: PropTypes.func
};

Button.defaultProps = {
  type: "text"
};

export default Button;