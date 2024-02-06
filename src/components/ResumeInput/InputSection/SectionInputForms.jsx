import PropTypes from "prop-types";
import Button from "../../Button/Button.jsx";

function SectionInputForms({sectionDetails, setSectionDetails, SectionItem}) {
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
    }

    return (
        <>
            {
                sectionDetails.map((item) => {
                    return (<SectionItem key={item.id + "-input"} itemDetails={item} on_change={update_sectionDetails} />);
                })
            }
            <Button text="Add" on_click={add_sectionDetails} />
        </>
    );
}

SectionInputForms.propTypes = {
    sectionDetails: PropTypes.array,
    setSectionDetails: PropTypes.func,
    SectionItem: PropTypes.elementType
};

export default SectionInputForms;