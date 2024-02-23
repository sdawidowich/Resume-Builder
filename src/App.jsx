import { useState } from 'react'
import ResumeInput from './components/ResumeInput/ResumeInput.jsx';
import ResumeOutput from './components/ResumeOutput/ResumeOutput.jsx';
import { EducationDetails, WorkExpDetails } from './components/DetailsClasses.jsx';
import "./App.css"

function App() {
  const [personalDetails, setPersonalDetails] = useState({});
  const [educationDetails, setEducationDetails] = useState([new EducationDetails()]);
  const [workExpDetails, setWorkExpDetails] = useState([new WorkExpDetails()]);

  return (
    <main>
      <ResumeInput personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} educationDetails={educationDetails} setEducationDetails={setEducationDetails} workExpDetails={workExpDetails} setWorkExpDetails={setWorkExpDetails} />
      <ResumeOutput personalDetails={personalDetails} educationDetails={educationDetails} workExpDetails={workExpDetails} />
    </main>
  )
}

export default App;
