import { useState } from 'react'
import InputSection from './components/InputSection/InputSection.jsx';
import './App.css'
import OutputPersonalDetails from './components/OutputPersonalDetails/OutputPersonalDetails.jsx';

function App() {
  const [personalDetails, setPersonalDetails] = useState({});

  function update_personalDetails(key, value) {
    setPersonalDetails({ ...personalDetails, [key]: value });
  }

  return (
    <>
      <InputSection heading="Personal Details" on_change={update_personalDetails} />
      <OutputPersonalDetails personalDetails={personalDetails} />
    </>
  )
}

export default App;
