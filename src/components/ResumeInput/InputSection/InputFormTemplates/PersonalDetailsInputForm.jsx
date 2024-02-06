import PropTypes from "prop-types";
import Input from "../../../Input/Input";
import Textarea from "../../../Textarea/Textarea";

function PersonalDetailsInputForm({personalDetails, setPersonalDetails}) {
    
    function update_personalDetails(key, value) {
        setPersonalDetails({ ...personalDetails, [key]: value });
    }

    return (
        <>
            <Input id="name" label="Full Name" dataKey="FullName" on_change={update_personalDetails} />
            <Input id="address" label="Address" dataKey="Address" on_change={update_personalDetails} />
            <Input id="phone" label="Phone Number" dataKey="Phone" on_change={update_personalDetails} />
            <Input id="email" label="Email" dataKey="Email" on_change={update_personalDetails} />
            <Textarea id="summary" label="Summary" dataKey="Summary" on_change={update_personalDetails} />
        </>
    )
}

PersonalDetailsInputForm.propTypes = {
    personalDetails: PropTypes.object,
    setPersonalDetails: PropTypes.func
  };

export default PersonalDetailsInputForm;