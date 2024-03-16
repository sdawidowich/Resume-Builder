import PropTypes from "prop-types";
import Button from "../../../Button/Button";
import "./InputListItem.css"

function InputListItem({itemDetails, onSelect, onDelete}) {
    let header = itemDetails[itemDetails["headerKey"]];
    return (
        <li className="input-list-item">
            <span className="item-name" onClick={onSelect}>{header ? header : "N/A"}</span>
            <Button  icon="./src/assets/trash-icon.svg" icon_alt="Delete Icon" classes="delete" on_click={() => {onDelete(itemDetails["id"])}} />
        </li>
    );
}

InputListItem.propTypes = {
    itemDetails: PropTypes.object,
    onSelect: PropTypes.func,
    onDelete: PropTypes.func
  };
  
  export default InputListItem;
  