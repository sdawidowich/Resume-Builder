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
  const [workExpDetails, setEorkExpDetails] = useState([{id: crypto.randomUUID()}]);

  function update_personalDetails(key, value) {
    setPersonalDetails({ ...personalDetails, [key]: value });
  }

  function editEducationItem(id, key, value) {
    setEducationDetails(educationDetails.map((item) => {
      if (item.id === id) {
        return { ...item, [key]: value };
      }

      return item;
    }))
  }

  function editWorkExpItem(id, key, value) {
    setEorkExpDetails(workExpDetails.map((item) => {
      if (item.id === id) {
        return { ...item, [key]: value };
      }

      return item;
    }))
  }

  return (
    <>
      <InputSection heading="Personal Details" >
        <PersonalDetailsInput on_change={update_personalDetails} />
      </InputSection>
      <InputSection heading="Education" >
        <EducationDetailsInput educationDetails={educationDetails} on_change={editEducationItem} />
      </InputSection>
      <InputSection heading="Work Experience" >
        <WorkExpDetailsInput workExpDetails={workExpDetails} on_change={editWorkExpItem} />
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
