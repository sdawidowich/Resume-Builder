import { useState } from 'react'
import InputSection from './components/InputSection/InputSection.jsx';
import OutputPersonalDetails from './components/OutputPersonalDetails/OutputPersonalDetails.jsx';
import PersonalDetailsInput from './components/InputSection/SectionInputDefinitions/PersonalDetailsInput.jsx';
import SectionDetailsInput from './components/InputSection/SectionDetailsInput.jsx';
import EducationInputItem from './components/InputSection/SectionInputDefinitions/EducationDetailsInputItem.jsx';
import WorkExpInputItem from './components/InputSection/SectionInputDefinitions/WorkExpDetailsInputItem.jsx';
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
        <SectionDetailsInput sectionDetails={educationDetails} setSectionDetails={setEducationDetails} SectionItem={EducationInputItem} />
      </InputSection>
      <InputSection heading="Work Experience" >
        <SectionDetailsInput sectionDetails={workExpDetails} setSectionDetails={setWorkExpDetails} SectionItem={WorkExpInputItem} />
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
