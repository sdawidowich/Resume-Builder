import PropTypes from 'prop-types'
import OutputPersonalDetails from './OutputPersonalDetails/OutputPersonalDetails';
import OutputSectionDetails from './OutputSection/OutputSection';
import jsPDF from 'jspdf';
import "./ResumeOutput.css";
import OutputSectionItem from './OutputSection/OutputSectionItem/OutputSectionItem';

function ResumeOutput({personalDetails, educationDetails, workExpDetails}) {

    function download() {
        const doc = new jsPDF('portrait', 'pt', 'a4');
        doc.html(document.getElementById("resume")).then(() => {
            doc.save('resume.pdf');
        });
    }

    return(
        <div className='resume-output' onClick={download}>
            <div id="resume">
                <OutputPersonalDetails personalDetails={personalDetails} />
                <OutputSectionDetails heading="Summary">
                    <OutputSectionItem itemDetails={personalDetails}>
                        <div className="description">{personalDetails.Summary}</div>
                    </OutputSectionItem>
                </OutputSectionDetails>
                <OutputSectionDetails heading="Education">
                    <>
                    {
                        educationDetails.map((item) => {
                            return (
                                <OutputSectionItem key={item.id + "-output"} itemDetails={item}>
                                    <>
                                        <div className='heading blue'>{item.School}</div>
                                        <div className='sub-heading'>{item.Degree}</div>
                                        <div className='gpa'>{item.GPA}</div>
                                    </>
                                </OutputSectionItem>
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
                                <OutputSectionItem key={item.id + "-output"} itemDetails={item}>
                                    <>
                                        <div className='heading blue'>{item.Company}</div>
                                        <div className='sub-heading'>{item.Position}</div>
                                        <div className='description'>{item.Description}</div>
                                    </>
                                </OutputSectionItem>
                            )
                        })
                    }
                    </>
                </OutputSectionDetails>
            </div>
            
        </div>
    );
}

ResumeOutput.propTypes = {
    personalDetails: PropTypes.object,
    educationDetails: PropTypes.array,
    workExpDetails: PropTypes.array
  };
  
  export default ResumeOutput;