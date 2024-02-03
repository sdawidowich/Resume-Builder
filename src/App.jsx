import { useState } from 'react'
import InputSection from './components/InputSection/InputSection.jsx';
import OutputPersonalDetails from './components/OutputPersonalDetails/OutputPersonalDetails.jsx';
import PersonalDetailsInput from './components/InputSection/SectionInputDefinitions/PersonalDetailsInput.jsx';
import SectionDetailsInput from './components/InputSection/SectionDetailsInput.jsx';
import EducationInputItem from './components/InputSection/SectionInputDefinitions/EducationDetailsInputItem.jsx';
import WorkExpInputItem from './components/InputSection/SectionInputDefinitions/WorkExpDetailsInputItem.jsx';
import './App.css'
import OutputSectionDetails from './components/OutputSectionDetails/OutputSectionDetails.jsx';

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
      <OutputSectionDetails heading="Education">
        {
          educationDetails.map((item) => {
            return (
                <div key={item.id + "-output"}>
                    <h4 className='heading'>{item.School}</h4>
                    <div className="details output">
                        <div className='degree output'>{item.Degree}</div>
                        <div className='startDate output'>{item.StartDate}</div>
                        <div className='endDate output'>{item.EndDate}</div>
                        <div className='gpa output'>{item.GPA}</div>
                    </div>
                </div>
            )
          })
        }
      </OutputSectionDetails>
      <OutputSectionDetails heading="Work Experience">
        {
          workExpDetails.map((item) => {
            return (
                <div key={item.id + "-output"}>
                    <h4 className='heading'>{item.Company}</h4>
                    <div className="details output">
                        <div className='degree output'>{item.Position}</div>
                        <div className='startDate output'>{item.StartDate}</div>
                        <div className='endDate output'>{item.EndDate}</div>
                        <div className='gpa output'>{item.Description}</div>
                    </div>
                </div>
            )
          })
        }
      </OutputSectionDetails>
    </>
  )
}

export default App;
