import PropTypes from 'prop-types'
import InputSection from "./InputSection/InputSection";
import InputSectionBody from "./InputSection/InputSectionBody/InputSectionBody";
import EducationInputForm from "./InputSection/InputForms/EducationInputForm";
import PersonalDetailsInputForm from "./InputSection/InputForms/PersonalDetailsInputForm";
import WorkExpInputForm from "./InputSection/InputForms/WorkExpInputForm";
import "./ResumeInput.css";
import { EducationDetails, WorkExpDetails } from '../DetailsClasses';

function ResumeInput({personalDetails, setPersonalDetails, educationDetails, setEducationDetails, workExpDetails, setWorkExpDetails}) {
    return(
        <div className='resume-input'>
            <InputSection heading="Personal Details" icon="./src/assets/person-icon.svg" icon_alt="Person Icon" >
                <PersonalDetailsInputForm personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
            </InputSection>
            <InputSection heading="Education" icon="./src/assets/school-icon.svg" icon_alt="School Icon" >
                <InputSectionBody sectionDetails={educationDetails} setSectionDetails={setEducationDetails} DetailsClass={EducationDetails} InputForm={EducationInputForm} />
            </InputSection>
            <InputSection heading="Work Experience" icon="./src/assets/work-icon.svg" icon_alt="Work Icon" >
                <InputSectionBody sectionDetails={workExpDetails} setSectionDetails={setWorkExpDetails} DetailsClass={WorkExpDetails} InputForm={WorkExpInputForm} />
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
  