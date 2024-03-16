import PropTypes from "prop-types";
import Input from "../../../Input/Input";

function EducationInputForm({itemDetails, on_change}) {
    function handleChange(key, val) {
        on_change(itemDetails.id, key, val);
    }

    return (
        <div className="input-form">
            <Input id="school" label="School" placeholder="University of Wisconsin-Whitewater" value={itemDetails["School"]} dataKey="School" on_change={handleChange} />
            <Input id="degree" label="Degree" placeholder="B.S. in Computer Science" value={itemDetails["Degree"]} dataKey="Degree" on_change={handleChange} />
            <Input id="date" label="Date" placeholder="Sept 2021 - Present" value={itemDetails["Date"]} dataKey="Date" on_change={handleChange} />
            <Input id="gpa" label="GPA" placeholder="3.8" value={itemDetails["GPA"]} dataKey="GPA" on_change={handleChange} />
        </div>
    );
}

EducationInputForm.propTypes = {
    itemDetails: PropTypes.object,
    on_change: PropTypes.func
};

export default EducationInputForm;