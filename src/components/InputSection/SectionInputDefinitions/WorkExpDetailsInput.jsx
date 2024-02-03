import PropTypes from "prop-types";
import Input from "../../Input/Input";
import Textarea from "../../Textarea/Textarea";

function WorkExpItem({on_change}) {
    return (
        <div className="workexp-item">
            <Input id="company" label="Company" dataKey="Company" on_change={on_change} />
            <Input id="position" label="Position" dataKey="Position" on_change={on_change} />
            <Input id="startDate" label="Start Date" dataKey="StartDate" on_change={on_change} />
            <Input id="endDate" label="End Date" dataKey="EndDate" on_change={on_change} />
            <Textarea id="description" label="Description" dataKey="Description" on_change={on_change} />
        </div>
    );
}

WorkExpItem.propTypes = {
    on_change: PropTypes.func
  };

function WorkExpDetailsInput({on_change}) {
    return (
        <>
            <WorkExpItem on_change={on_change} />
        </>
    );
}

WorkExpDetailsInput.propTypes = {
    on_change: PropTypes.func
  };

export default WorkExpDetailsInput;