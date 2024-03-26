import PropTypes from 'prop-types'
import Button from '../Button/Button';
import ResumePDF from './ResumePDF/ResumePDF';
import { pdf } from '@react-pdf/renderer';
import downloadIcon from '../../assets/icons/download.svg'
import "./ResumeOutput.css";

function ResumeOutput({personalDetails, educationDetails, workExpDetails, skills}) {

    function getResume(format="") {
        return (<ResumePDF format={format} personalDetails={personalDetails} educationDetails={educationDetails} workExpDetails={workExpDetails} skills={skills} />);
    }

    function downloadPDF() {
        let resumePDF = pdf(getResume("PDF"));
        resumePDF.toBlob().then((blob) => {
            const filename = "resume.pdf";
            if(window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveBlob(blob, filename);
            }
            else{
                const el = window.document.createElement('a');
                el.href = window.URL.createObjectURL(blob);
                el.download = filename;
                document.body.appendChild(el);
                el.click();
                URL.revokeObjectURL(el.href)
                document.body.removeChild(el);
            }
        });
    }

    return (
        <div className='resume-output'>
            <div className='resume'>
                {getResume()}
            </div>
            <Button classes="download-btn" text="Download" icon={downloadIcon} on_click={downloadPDF} />
        </div>
    );
}

ResumeOutput.propTypes = {
    personalDetails: PropTypes.object,
    educationDetails: PropTypes.array,
    workExpDetails: PropTypes.array,
    skills: PropTypes.array
};
  
export default ResumeOutput;