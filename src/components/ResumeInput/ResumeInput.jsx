import PropTypes from 'prop-types'
import InputSection from "./InputSection/InputSection";
import InputSectionBody from "./InputSection/InputSectionBody/InputSectionBody";
import EducationInputForm from "./InputSection/InputForms/EducationInputForm";
import PersonalDetailsInputForm from "./InputSection/InputForms/PersonalDetailsInputForm";
import WorkExpInputForm from "./InputSection/InputForms/WorkExpInputForm";
import { EducationDetails, WorkExpDetails } from '../../helpers/DetailsClasses';
import personIcon from "../../assets/icons/person-icon.svg";
import schoolIcon from "../../assets/icons/school-icon.svg";
import workIcon from "../../assets/icons/work-icon.svg";
import skillsIcon from "../../assets/icons/wrench.svg";
import SkillsSectionBody from './InputSection/SkillsSectionBody/SkillsSectionBody';
import "./ResumeInput.css";

function ResumeInput({personalDetails, setPersonalDetails, educationDetails, setEducationDetails, workExpDetails, setWorkExpDetails, skills, setSkills}) {
    return(
        <div className='resume-input'>
            <InputSection heading="Personal Details" icon={personIcon} icon_alt="Person Icon" >
                <PersonalDetailsInputForm personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
            </InputSection>
            <InputSection heading="Education" icon={schoolIcon} icon_alt="School Icon" >
                <InputSectionBody sectionDetails={educationDetails} setSectionDetails={setEducationDetails} DetailsClass={EducationDetails} InputForm={EducationInputForm} />
            </InputSection>
            <InputSection heading="Work Experience" icon={workIcon} icon_alt="Work Icon" >
                <InputSectionBody sectionDetails={workExpDetails} setSectionDetails={setWorkExpDetails} DetailsClass={WorkExpDetails} InputForm={WorkExpInputForm} />
            </InputSection>
            <InputSection heading="Skills" icon={skillsIcon} icon_alt="Wrench Icon" >
                <SkillsSectionBody skills={skills} setSkills={setSkills} />
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
    setWorkExpDetails: PropTypes.func,
    skills: PropTypes.array,
    setSkills: PropTypes.func
  };
  
  export default ResumeInput;
  