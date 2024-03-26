import PropTypes from 'prop-types'
import './Button.css'

function Button({id, text, icon, icon_alt, classes, dataKey, on_click, disabled}) {
  return (
    <button className={'button ' + classes} id={id} onClick={on_click} data-key={dataKey} disabled={disabled}>
      {icon ? <img className='button-icon' src={icon} alt={icon_alt} /> : ""}{text}
    </button>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  icon_alt: PropTypes.string,
  classes: PropTypes.string,
  dataKey: PropTypes.string,
  on_click: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: "text",
  disabled: false
};

export default Button;