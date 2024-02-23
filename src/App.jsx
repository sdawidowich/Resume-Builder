import { useState } from 'react'
import ResumeInput from './components/ResumeInput/ResumeInput.jsx';
import ResumeOutput from './components/ResumeOutput/ResumeOutput.jsx';
import "./App.css"

function App() {
  const [personalDetails, setPersonalDetails] = useState({});
  const [educationDetails, setEducationDetails] = useState([{id: crypto.randomUUID(), heading: "School"}]);
  const [workExpDetails, setWorkExpDetails] = useState([{id: crypto.randomUUID(), heading: "Company"}]);

  return (
    <main>
      <ResumeInput personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} educationDetails={educationDetails} setEducationDetails={setEducationDetails} workExpDetails={workExpDetails} setWorkExpDetails={setWorkExpDetails} />
      <ResumeOutput personalDetails={personalDetails} educationDetails={educationDetails} workExpDetails={workExpDetails} />
    </main>
  )
}

export default App;
