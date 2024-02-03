import PropTypes from "prop-types";

function SectionDetailsInput({sectionDetails, setSectionDetails, SectionItem}) {
    function update_sectionDetails(id, key, value) {
        setSectionDetails(sectionDetails.map((item) => {
            if (item.id === id) {
                return { ...item, [key]: value };
            }
        
            return item;
        }))
    }

    return (
        <>
            {
                sectionDetails.map((item) => {
                    return (<SectionItem key={item.id + "-input"} itemDetails={item} on_change={update_sectionDetails} />);
                })
            }
        </>
    );
}

SectionDetailsInput.propTypes = {
    sectionDetails: PropTypes.array,
    setSectionDetails: PropTypes.func,
    SectionItem: PropTypes.elementType
};

export default SectionDetailsInput;