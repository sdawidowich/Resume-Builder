import PropTypes from "prop-types";
import Button from "../../../Button/Button";
import trashIcon from "../../../../assets/icons/trash-icon.svg";
import arrowUp from "../../../../assets/icons/arrow-up.svg";
import arrowDown from "../../../../assets/icons/arrow-down.svg";
import visible from "../../../../assets/icons/visible.svg";
import invisible from "../../../../assets/icons/invisible.svg";
import "./InputListItem.css";

function InputListItem({itemDetails, onSelect, onDelete, index, listSize, moveItem, changeVisibility}) {
    let header = itemDetails[itemDetails["headerKey"]];
    return (
        <li className={"input-list-item" + (!itemDetails["visible"] ? " invisible" : "")}>
            <div className="item-name">
                <div onClick={onSelect}><span>{header ? header : "N/A"}</span></div>
                {
                    itemDetails["visible"] ? 
                    <Button icon={visible} icon_alt="Visible Icon" classes="plain-circle eye" on_click={() => {changeVisibility(itemDetails.id, false)}} /> 
                    : 
                    <Button icon={invisible} icon_alt="Invisible Icon" classes="plain-circle eye" on_click={() => {changeVisibility(itemDetails.id, true)}} />

                }
            </div>
            <Button icon={arrowUp} icon_alt="Arrow Up Icon" classes="secondary margin-left" on_click={() => {moveItem(index, index - 1)}} disabled={index <= 0 ? true : false} />
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
    moveItem: PropTypes.func,
    changeVisibility: PropTypes.func
  };
  
  export default InputListItem;
  