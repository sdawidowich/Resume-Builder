import PropTypes from "prop-types";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import trashIcon from "../../../../assets/icons/trash-icon.svg";
import arrowUp from "../../../../assets/icons/arrow-up.svg";
import arrowDown from "../../../../assets/icons/arrow-down.svg";

function SkillsInputForm({itemDetails, on_change, on_delete, index, listSize, moveItem}) {
    function handleChange(key, val) {
        on_change(itemDetails.id, key, val);
    }

    return (
        <div className="input-item">
            <Input id={"skill-" + index} label="Skill" placeholder="C#" value={itemDetails["Skill"]} dataKey="Skill" on_change={handleChange} />
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
    moveItem: PropTypes.func
};

export default SkillsInputForm;