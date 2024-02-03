import { useState } from 'react'
import InputSection from './components/InputSection/InputSection.jsx';
import OutputPersonalDetails from './components/OutputPersonalDetails/OutputPersonalDetails.jsx';
import PersonalDetailsInput from './components/InputSection/SectionInputDefinitions/PersonalDetailsInput.jsx';
import EducationDetailsInput from './components/InputSection/SectionInputDefinitions/EducationDetailsInput.jsx';
import WorkExpDetailsInput from './components/InputSection/SectionInputDefinitions/WorkExpDetailsInput.jsx';
import './App.css'

function App() {
  const [personalDetails, setPersonalDetails] = useState({});
  const [educationDetails, setEducationDetails] = useState([{id: crypto.randomUUID()}]);
  const [workExpDetails, setWorkExpDetails] = useState([{id: crypto.randomUUID()}]);

  return (
    <>
      <InputSection heading="Personal Details" >
        <PersonalDetailsInput personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
      </InputSection>
      <InputSection heading="Education" >
        <EducationDetailsInput educationDetails={educationDetails} setEducationDetails={setEducationDetails} />
      </InputSection>
      <InputSection heading="Work Experience" >
        <WorkExpDetailsInput workExpDetails={workExpDetails} setWorkExpDetails={setWorkExpDetails} />
      </InputSection>
      <OutputPersonalDetails personalDetails={personalDetails} />
      <div className="output-personalDetails">
            <h2 className='heading'>{educationDetails[0].School}</h2>
            <div className="details">
                <div>{educationDetails[0].Degree}</div>
                <div>{educationDetails[0].StartDate}</div>
                <div>{educationDetails[0].EndDate}</div>
                <div>{educationDetails[0].GPA}</div>
            </div>
      </div>
      <div className="output-personalDetails">
            <h2 className='heading'>{workExpDetails[0].Company}</h2>
            <div className="details">
                <div>{workExpDetails[0].Position}</div>
                <div>{workExpDetails[0].StartDate}</div>
                <div>{workExpDetails[0].EndDate}</div>
                <div>{workExpDetails[0].Description}</div>
            </div>
      </div>
    </>
  )
}

export default App;
