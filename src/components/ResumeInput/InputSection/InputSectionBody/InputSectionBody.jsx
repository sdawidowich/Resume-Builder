import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../../Button/Button.jsx";
import InputListItem from "../InputListItem/InputListItem.jsx";

function InputSectionBody({sectionDetails, setSectionDetails, DetailsClass, InputForm}) {
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
        setSectionDetails([...sectionDetails, new DetailsClass()]);
        setSelectedForm(sectionDetails.length);
    }

    function swapItem(index1, index2) {
        if (index1 < 0 || index2 < 0 || index1 >= sectionDetails.length || index2 >= sectionDetails.length) {
            return;
        }

        let temp = [...sectionDetails];
        [temp[index1], temp[index2]] = [temp[index2], temp[index1]];
        setSectionDetails(temp);
    }
    
    function changeVisibility(id, value) {
        setSectionDetails(sectionDetails.map((item) => {
            if (item.id === id) {
                return { ...item, visible: value };
            }
        
            return item;
        }))
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
                            return (<InputListItem key={item.id + "-inputListItem"} itemDetails={item} onSelect={() => {setSelectedForm(i)}} onDelete={(id) => {setSectionDetails(sectionDetails.filter((item) => item["id"] != id))}} index={i} listSize={sectionDetails.length} moveItem={swapItem} changeVisibility={changeVisibility} />);
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
    DetailsClass: PropTypes.elementType,
    InputForm: PropTypes.elementType
};

export default InputSectionBody;