import PropTypes from "prop-types";
import Input from "../../Input/Input";
import Textarea from "../../Textarea/Textarea";

function WorkExpInputItem({itemDetails, on_change}) {
    function handleChange(key, val) {
        on_change(itemDetails.id, key, val);
    }

    return (
        <div className="workexp-item">
            <Input id="company" label="Company" dataKey="Company" on_change={handleChange} />
            <Input id="position" label="Position" dataKey="Position" on_change={handleChange} />
            <Input id="startDate" label="Start Date" dataKey="StartDate" on_change={handleChange} />
            <Input id="endDate" label="End Date" dataKey="EndDate" on_change={handleChange} />
            <Textarea id="description" label="Description" dataKey="Description" on_change={handleChange} />
        </div>
    );
}

WorkExpInputItem.propTypes = {
    itemDetails: PropTypes.object,
    on_change: PropTypes.func
};

export default WorkExpInputItem;