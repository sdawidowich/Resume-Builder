import PropTypes from "prop-types";
import Input from "../../Input/Input";
import Textarea from "../../Textarea/Textarea";

function WorkExpItem({itemDetails, on_change}) {
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

WorkExpItem.propTypes = {
    itemDetails: PropTypes.object,
    on_change: PropTypes.func
};

function WorkExpDetailsInput({workExpDetails, on_change}) {
    return (
        <>
            {
                workExpDetails.map((item) => {
                    return (<WorkExpItem key={item.id} itemDetails={item} on_change={on_change} />);
                })
            }
        </>
    );
}

WorkExpDetailsInput.propTypes = {
    workExpDetails: PropTypes.array,
    on_change: PropTypes.func
};

export default WorkExpDetailsInput;