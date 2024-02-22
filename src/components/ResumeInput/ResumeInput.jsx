import PropTypes from 'prop-types'
import InputSection from "./InputSection/InputSection";
import SectionInputForms from "./InputSection/SectionInputForms";
import EducationInputForm from "./InputSection/InputFormTemplates/EducationInputForm";
import PersonalDetailsInputForm from "./InputSection/InputFormTemplates/PersonalDetailsInputForm";
import WorkExpInputForm from "./InputSection/InputFormTemplates/WorkExpInputForm";
import "./ResumeInput.css";

function ResumeInput({personalDetails, setPersonalDetails, educationDetails, setEducationDetails, workExpDetails, setWorkExpDetails}) {
    return(
        <div className='resume-input'>
            <InputSection heading="Personal Details" icon="./src/assets/person-icon.svg" icon_alt="Person Icon" >
                <PersonalDetailsInputForm personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
            </InputSection>
            <InputSection heading="Education" icon="./src/assets/school-icon.svg" icon_alt="School Icon" >
                <SectionInputForms sectionDetails={educationDetails} setSectionDetails={setEducationDetails} SectionItem={EducationInputForm} />
            </InputSection>
            <InputSection heading="Work Experience" icon="./src/assets/work-icon.svg" icon_alt="Work Icon" >
                <SectionInputForms sectionDetails={workExpDetails} setSectionDetails={setWorkExpDetails} SectionItem={WorkExpInputForm} />
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
  