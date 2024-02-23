import PropTypes from "prop-types";
import Input from "../../../Input/Input";
import Textarea from "../../../Textarea/Textarea";

function WorkExpInputForm({itemDetails, on_change}) {
    function handleChange(key, val) {
        on_change(itemDetails.id, key, val);
    }

    return (
        <div className="input-form">
            <Input id="company" label="Company" value={itemDetails["Company"]} dataKey="Company" on_change={handleChange} />
            <Input id="position" label="Position" value={itemDetails["Position"]} dataKey="Position" on_change={handleChange} />
            <Input id="startDate" label="Start Date" value={itemDetails["StartDate"]} dataKey="StartDate" on_change={handleChange} />
            <Input id="endDate" label="End Date" value={itemDetails["EndDate"]} dataKey="EndDate" on_change={handleChange} />
            <Textarea id="description" label="Description" value={itemDetails["Description"]} dataKey="Description" on_change={handleChange} />
        </div>
    );
}

WorkExpInputForm.propTypes = {
    itemDetails: PropTypes.object,
    on_change: PropTypes.func
};

export default WorkExpInputForm;