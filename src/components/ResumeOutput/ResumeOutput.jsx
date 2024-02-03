import PropTypes from 'prop-types'
import OutputPersonalDetails from './OutputPersonalDetails/OutputPersonalDetails';
import OutputSectionDetails from './OutputSectionDetails/OutputSectionDetails';
import "./ResumeOutput.css";

function ResumeOutput({personalDetails, educationDetails, workExpDetails}) {
    return(
        <div className='resume-output'>
            <OutputPersonalDetails personalDetails={personalDetails} />
            <OutputSectionDetails heading="Education">
                <>
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
                </>
            </OutputSectionDetails>
            <OutputSectionDetails heading="Work Experience">
                <>
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
                </>
            </OutputSectionDetails>
        </div>
    );
}

ResumeOutput.propTypes = {
    personalDetails: PropTypes.object,
    educationDetails: PropTypes.array,
    workExpDetails: PropTypes.array
  };
  
  export default ResumeOutput;