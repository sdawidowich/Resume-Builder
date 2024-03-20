import PropTypes from "prop-types";
import Input from "../../../Input/Input";
import Textarea from "../../../Textarea/Textarea";

function PersonalDetailsInputForm({personalDetails, setPersonalDetails}) {
    
    function update_personalDetails(key, value) {
        setPersonalDetails({ ...personalDetails, [key]: value });
    }

    return (
        <div key={personalDetails["id"]}>
            <Input id="name" label="Full Name" placeholder="John Doe" value={personalDetails["FullName"]} dataKey="FullName" on_change={update_personalDetails} />
            <Input id="location" label="Location" placeholder="Madison, WI" value={personalDetails["Location"]} dataKey="Location" on_change={update_personalDetails} />
            <Input id="phone" label="Phone Number" placeholder="(123) 456-7890" value={personalDetails["Phone"]} dataKey="Phone" on_change={update_personalDetails} />
            <Input id="email" label="Email" placeholder="example@gmail.com" value={personalDetails["Email"]} dataKey="Email" on_change={update_personalDetails} />
            <Input id="link" label="Link" placeholder="https://example.com" value={personalDetails["Link"]} dataKey="Link" on_change={update_personalDetails} />
            <Textarea id="summary" label="Summary" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie nulla odio, a tristique lectus scelerisque vitae. Curabitur et accumsan est, non pretium augue..." value={personalDetails["Summary"]} dataKey="Summary" on_change={update_personalDetails} />
        </div>
    )
}

PersonalDetailsInputForm.propTypes = {
    personalDetails: PropTypes.object,
    setPersonalDetails: PropTypes.func
  };

export default PersonalDetailsInputForm;