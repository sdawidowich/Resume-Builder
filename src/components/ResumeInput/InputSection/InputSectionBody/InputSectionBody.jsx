import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../../Button/Button.jsx";
import InputListItem from "../InputListItem/InputListItem.jsx";

function InputSectionBody({sectionDetails, setSectionDetails, InputForm}) {
    const [selectedForm, setSelectedForm] = useState(-1);

    function update_sectionDetails(id, key, value) {
        setSectionDetails(sectionDetails.map((item) => {
            if (item.id === id) {
                return { ...item, [key]: value };
            }
        
            return item;
        }))
    }

    function add_sectionDetails() {
        setSectionDetails([...sectionDetails, {id: crypto.randomUUID()}]);
        setSelectedForm(sectionDetails.length);
    }

    if (selectedForm != -1) {
        let item = sectionDetails[selectedForm];

        return (
            <>
                <InputForm itemDetails={item} on_change={update_sectionDetails} />
                <Button text="Done" on_click={() => {setSelectedForm(-1)}} />
            </>
        );
    }
    else {
        return (
            <>
                <ul className="section-items">
                    {
                        sectionDetails.map((item, i) => {
                            return (<InputListItem key={item.id + "-inputListItem"} itemDetails={item} onSelect={() => {setSelectedForm(i)}} onDelete={(id) => {setSectionDetails(sectionDetails.filter((item) => item["id"] != id))}} />);
                        })
                    }
                </ul>
                <Button text="+ Add Item" on_click={add_sectionDetails} />
            </>
        );
    }
}

InputSectionBody.propTypes = {
    sectionDetails: PropTypes.array,
    setSectionDetails: PropTypes.func,
    InputForm: PropTypes.elementType
};

export default InputSectionBody;