import { useState } from 'react'
import InputSection from './components/InputSection/InputSection.jsx';
import './App.css'

function App() {
  const [personalDetails, setPersonalDetails] = useState({});

  function update_personalDetails(key, value) {
    setPersonalDetails({ ...personalDetails, [key]: value });
  }

  return (
    <>
      <InputSection heading="Personal Details" on_change={update_personalDetails} />
      {personalDetails.FullName}
    </>
  )
}

export default App;
