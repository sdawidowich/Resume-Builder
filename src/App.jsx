import { useState } from 'react'
import InputSection from './components/InputSection/InputSection.jsx';
import './App.css'
import OutputPersonalDetails from './components/OutputPersonalDetails/OutputPersonalDetails.jsx';
import PersonalDetailsInput from './components/InputSection/SectionInputDefinitions/PersonalDetailsInput.jsx';
import EducationDetailsInput from './components/InputSection/SectionInputDefinitions/EducationDetailsInput.jsx';
import WorkExpDetailsInput from './components/InputSection/SectionInputDefinitions/WorkExpDetailsInput.jsx';

function App() {
  const [personalDetails, setPersonalDetails] = useState({});

  function update_personalDetails(key, value) {
    setPersonalDetails({ ...personalDetails, [key]: value });
  }

  return (
    <>
      <InputSection heading="Personal Details" >
        <PersonalDetailsInput on_change={update_personalDetails} />
      </InputSection>
      <InputSection heading="Education" >
        <EducationDetailsInput />
      </InputSection>
      <InputSection heading="Work Experience" >
        <WorkExpDetailsInput />
      </InputSection>
      <OutputPersonalDetails personalDetails={personalDetails} />
    </>
  )
}

export default App;
