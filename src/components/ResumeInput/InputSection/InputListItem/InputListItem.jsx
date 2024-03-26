import PropTypes from "prop-types";
import Button from "../../../Button/Button";
import trashIcon from "../../../../assets/icons/trash-icon.svg";
import arrowUp from "../../../../assets/icons/arrow-up.svg";
import arrowDown from "../../../../assets/icons/arrow-down.svg";
import "./InputListItem.css";

function InputListItem({itemDetails, onSelect, onDelete, index, listSize, moveItem}) {
    let header = itemDetails[itemDetails["headerKey"]];
    return (
        <li className="input-list-item">
            <div className="item-name" onClick={onSelect}><span>{header ? header : "N/A"}</span></div>
            <Button icon={arrowUp} icon_alt="Arrow Up Icon" classes="secondary" on_click={() => {moveItem(index, index - 1)}} disabled={index <= 0 ? true : false} />
            <Button icon={arrowDown} icon_alt="Arrow Down Icon" classes="secondary margin-left" on_click={() => {moveItem(index, index + 1)}} disabled={index >= listSize - 1 ? true : false} />
            <Button icon={trashIcon} icon_alt="Delete Icon" classes="secondary margin-left" on_click={() => {onDelete(itemDetails["id"])}} />
        </li>
    );
}

InputListItem.propTypes = {
    itemDetails: PropTypes.object,
    onSelect: PropTypes.func,
    onDelete: PropTypes.func,
    index: PropTypes.number,
    listSize: PropTypes.number,
    moveItem: PropTypes.func
  };
  
  export default InputListItem;
  