import PropTypes from "prop-types";
import Input from "../../Input/Input";
import Textarea from "../../Textarea/Textarea";

function PersonalDetailsInput({on_change}) {
    return (
        <>
            <Input id="name" label="Full Name" dataKey="FullName" on_change={on_change} />
            <Input id="address" label="Address" dataKey="Address" on_change={on_change} />
            <Input id="phone" label="Phone Number" dataKey="Phone" on_change={on_change} />
            <Input id="email" label="Email" dataKey="Email" on_change={on_change} />
            <Textarea id="summary" label="Summary" dataKey="Summary" on_change={on_change} />
        </>
    )
}

PersonalDetailsInput.propTypes = {
    on_change: PropTypes.func
  };

export default PersonalDetailsInput;