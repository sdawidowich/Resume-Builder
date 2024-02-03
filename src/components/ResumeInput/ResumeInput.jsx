import PropTypes from 'prop-types'
import InputSection from "../InputSection/InputSection";
import SectionInputItems from "../InputSection/SectionInputItems";
import EducationInputItem from "../InputSection/SectionInputItems/EducationInputItem";
import PersonalDetailsInputItem from "../InputSection/SectionInputItems/PersonalDetailsInputItem";
import WorkExpInputItem from "../InputSection/SectionInputItems/WorkExpInputItem";
import "./ResumeInput.css";

function ResumeInput({personalDetails, setPersonalDetails, educationDetails, setEducationDetails, workExpDetails, setWorkExpDetails}) {
    return(
        <div className='resume-input'>
            <InputSection heading="Personal Details" >
                <PersonalDetailsInputItem personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
            </InputSection>
            <InputSection heading="Education" >
                <SectionInputItems sectionDetails={educationDetails} setSectionDetails={setEducationDetails} SectionItem={EducationInputItem} />
            </InputSection>
            <InputSection heading="Work Experience" >
                <SectionInputItems sectionDetails={workExpDetails} setSectionDetails={setWorkExpDetails} SectionItem={WorkExpInputItem} />
            </InputSection>
        </div>
    );
}

ResumeInput.propTypes = {
    personalDetails: PropTypes.object, 
    setPersonalDetails: PropTypes.func, 
    educationDetails: PropTypes.array, 
    setEducationDetails: PropTypes.func, 
    workExpDetails: PropTypes.array, 
    setWorkExpDetails: PropTypes.func
  };
  
  export default ResumeInput;
  