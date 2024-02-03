import PropTypes from "prop-types";
import Input from "../../Input/Input";

function EducationItem({on_change}) {
    return (
        <div className="education-item">
            <Input id="school" label="School" dataKey="School" on_change={on_change} />
            <Input id="degree" label="Degree" dataKey="Degree" on_change={on_change} />
            <Input id="startDate" label="Start Date" dataKey="StartDate" on_change={on_change} />
            <Input id="endDate" label="End Date" dataKey="EndDate" on_change={on_change} />
            <Input id="gpa" label="GPA" dataKey="GPA" on_change={on_change} />
        </div>
    );
}

EducationItem.propTypes = {
    on_change: PropTypes.func
  };

function EducationDetailsInput({on_change}) {
    return (
        <>
            <EducationItem on_change={on_change} />
        </>
    );
}

EducationDetailsInput.propTypes = {
    on_change: PropTypes.func
  };

export default EducationDetailsInput;