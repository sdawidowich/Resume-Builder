import PropTypes from "prop-types";
import Input from "../../Input/Input";

function EducationInputItem({itemDetails, on_change}) {
    function handleChange(key, val) {
        on_change(itemDetails.id, key, val);
    }

    return (
        <div className="education-item">
            <Input id="school" label="School" dataKey="School" on_change={handleChange} />
            <Input id="degree" label="Degree" dataKey="Degree" on_change={handleChange} />
            <Input id="startDate" label="Start Date" dataKey="StartDate" on_change={handleChange} />
            <Input id="endDate" label="End Date" dataKey="EndDate" on_change={handleChange} />
            <Input id="gpa" label="GPA" dataKey="GPA" on_change={handleChange} />
        </div>
    );
}

EducationInputItem.propTypes = {
    itemDetails: PropTypes.object,
    on_change: PropTypes.func
};

export default EducationInputItem;