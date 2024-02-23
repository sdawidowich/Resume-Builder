import PropTypes from "prop-types";
import "./InputListItem.css"
import Button from "../../../Button/Button";

function InputListItem({itemDetails, onSelect, onDelete}) {
    let header = itemDetails[itemDetails["heading"]];
    return (
        <li className="input-list-item">
            <span className="item-name" onClick={onSelect}>{header ? header : "N/A"}</span>
            <Button text="Delete" classes="delete" on_click={() => {onDelete(itemDetails["id"])}} />
        </li>
    );
}

InputListItem.propTypes = {
    itemDetails: PropTypes.object,
    onSelect: PropTypes.func,
    onDelete: PropTypes.func
  };
  
  export default InputListItem;
  