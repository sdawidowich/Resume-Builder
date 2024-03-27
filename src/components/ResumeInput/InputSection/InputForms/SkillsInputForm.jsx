import PropTypes from "prop-types";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import trashIcon from "../../../../assets/icons/trash-icon.svg";
import arrowUp from "../../../../assets/icons/arrow-up.svg";
import arrowDown from "../../../../assets/icons/arrow-down.svg";
import visible from "../../../../assets/icons/visible.svg";
import invisible from "../../../../assets/icons/invisible.svg";

function SkillsInputForm({itemDetails, on_change, on_delete, index, listSize, moveItem, changeVisibility}) {
    function handleChange(key, val) {
        on_change(itemDetails.id, key, val);
    }

    return (
        <div className={"input-item" + (!itemDetails["visible"] ? " invisible" : "")}>
            <Input id={"skill-" + index} label={"Skill " + (index + 1)} placeholder="C#" value={itemDetails["Skill"]} dataKey="Skill" on_change={handleChange} />
            
            {
                itemDetails["visible"] ? 
                <Button icon={visible} icon_alt="Visible Icon" classes="plain-circle eye" on_click={() => {changeVisibility(itemDetails.id, false)}} /> 
                : 
                <Button icon={invisible} icon_alt="Invisible Icon" classes="plain-circle eye" on_click={() => {changeVisibility(itemDetails.id, true)}} />

            }
            <Button icon={arrowUp} icon_alt="Arrow Up Icon" classes="secondary" on_click={() => {moveItem(index, index - 1)}} disabled={index <= 0 ? true : false} />
            <Button icon={arrowDown} icon_alt="Arrow Down Icon" classes="secondary margin-left" on_click={() => {moveItem(index, index + 1)}} disabled={index >= listSize - 1 ? true : false} />
            <Button icon={trashIcon} icon_alt="Delete Icon" classes="secondary margin-left" on_click={() => {on_delete(itemDetails["id"])}} />
        </div>
    );
}

SkillsInputForm.propTypes = {
    itemDetails: PropTypes.object,
    on_change: PropTypes.func,
    on_delete: PropTypes.func,
    index: PropTypes.number,
    listSize: PropTypes.number,
    moveItem: PropTypes.func,
    changeVisibility: PropTypes.func
};

export default SkillsInputForm;