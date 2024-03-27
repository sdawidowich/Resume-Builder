import { useState } from 'react'
import Menu from './components/Menu/Menu.jsx';
import ResumeInput from './components/ResumeInput/ResumeInput.jsx';
import ResumeOutput from './components/ResumeOutput/ResumeOutput.jsx';
import { EducationDetails, Skill, WorkExpDetails } from './helpers/DetailsClasses.jsx';
import "./App.css"

function App() {
  const [personalDetails, setPersonalDetails] = useState({id: crypto.randomUUID()});
  const [educationDetails, setEducationDetails] = useState([new EducationDetails()]);
  const [workExpDetails, setWorkExpDetails] = useState([new WorkExpDetails()]);
  const [skills, setSkills] = useState([new Skill()]);
  const [menuState, setMenuState] = useState(-1);

  function setResumeDetails(resumeDetails) {
    setPersonalDetails(resumeDetails.personalDetails);
    setEducationDetails(resumeDetails.educationDetails);
    setWorkExpDetails(resumeDetails.workExpDetails);
    setSkills(resumeDetails.skills);
  }

  return (
    <main>
      <div className="left-container">
        <Menu menuState={menuState} setMenuState={setMenuState} personalDetails={personalDetails} educationDetails={educationDetails} workExpDetails={workExpDetails} setResumeDetails={setResumeDetails} />
        <ResumeInput personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} educationDetails={educationDetails} setEducationDetails={setEducationDetails} workExpDetails={workExpDetails} setWorkExpDetails={setWorkExpDetails} skills={skills} setSkills={setSkills} />
      </div>
      <div className="right-container">
        <ResumeOutput personalDetails={personalDetails} educationDetails={educationDetails} workExpDetails={workExpDetails} skills={skills} />
      </div>
    </main>
  )
}

export default App;
