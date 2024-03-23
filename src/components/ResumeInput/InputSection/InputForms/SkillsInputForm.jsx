import PropTypes from "prop-types";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import trashIcon from "../../../../assets/icons/trash-icon.svg";

function SkillsInputForm({itemDetails, on_change, on_delete}) {
    function handleChange(key, val) {
        on_change(itemDetails.id, key, val);
    }

    return (
        <div className="input-item">
            <Input id="skill" label="Skill" placeholder="C#" value={itemDetails["Skill"]} dataKey="Skill" on_change={handleChange} />
            <Button icon={trashIcon} icon_alt="Delete Icon" classes="delete" on_click={() => {on_delete(itemDetails["id"])}} />
        </div>
    );
}

SkillsInputForm.propTypes = {
    itemDetails: PropTypes.object,
    on_change: PropTypes.func,
    on_delete: PropTypes.func
};

export default SkillsInputForm;