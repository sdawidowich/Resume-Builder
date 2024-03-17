import PropTypes from "prop-types";
import Input from "../../../Input/Input";
import Textarea from "../../../Textarea/Textarea";

function WorkExpInputForm({itemDetails, on_change}) {
    function handleChange(key, val) {
        on_change(itemDetails.id, key, val);
    }

    return (
        <div className="input-form" key={itemDetails["id"]}>
            <Input id="company" label="Company" placeholder="GitHub" value={itemDetails["Company"]} dataKey="Company" on_change={handleChange} />
            <Input id="position" label="Position" placeholder="Software Engineer" value={itemDetails["Position"]} dataKey="Position" on_change={handleChange} />
            <Input id="date" label="Date" placeholder="Jun 2018 - Sept 2021" value={itemDetails["Date"]} dataKey="Date" on_change={handleChange} />
            <Textarea id="description" label="Description" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie nulla odio, a tristique lectus scelerisque vitae. Curabitur et accumsan est, non pretium augue..." value={itemDetails["Description"]} dataKey="Description" on_change={handleChange} />
        </div>
    );
}

WorkExpInputForm.propTypes = {
    itemDetails: PropTypes.object,
    on_change: PropTypes.func
};

export default WorkExpInputForm;