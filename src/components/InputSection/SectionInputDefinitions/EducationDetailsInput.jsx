import PropTypes from "prop-types";
import Input from "../../Input/Input";

function EducationItem({itemDetails, on_change}) {
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

EducationItem.propTypes = {
    itemDetails: PropTypes.object,
    on_change: PropTypes.func
  };

function EducationDetailsInput({educationDetails, on_change}) {
    return (
        <>
            {
                educationDetails.map((item) => {
                    return (<EducationItem key={item.id} itemDetails={item} on_change={on_change} />);
                })
            }
        </>
    );
}

EducationDetailsInput.propTypes = {
    educationDetails: PropTypes.array,
    on_change: PropTypes.func
  };

export default EducationDetailsInput;