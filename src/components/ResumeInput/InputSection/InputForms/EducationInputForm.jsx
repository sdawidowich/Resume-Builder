import PropTypes from "prop-types";
import Input from "../../../Input/Input";

function EducationInputForm({itemDetails, on_change}) {
    function handleChange(key, val) {
        on_change(itemDetails.id, key, val);
    }

    return (
        <div className="input-form">
            <Input id="school" label="School" value={itemDetails["School"]} dataKey="School" on_change={handleChange} />
            <Input id="degree" label="Degree" value={itemDetails["Degree"]} dataKey="Degree" on_change={handleChange} />
            <Input id="startDate" label="Start Date" value={itemDetails["StartDate"]} dataKey="StartDate" on_change={handleChange} />
            <Input id="endDate" label="End Date" value={itemDetails["EndDate"]} dataKey="EndDate" on_change={handleChange} />
            <Input id="gpa" label="GPA" value={itemDetails["GPA"]} dataKey="GPA" on_change={handleChange} />
        </div>
    );
}

EducationInputForm.propTypes = {
    itemDetails: PropTypes.object,
    on_change: PropTypes.func
};

export default EducationInputForm;