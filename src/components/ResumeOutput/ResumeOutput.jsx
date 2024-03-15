import PropTypes from 'prop-types'
import Button from '../Button/Button';
import ResumePDF from './ResumePDF/ResumePDF';
import { pdf } from '@react-pdf/renderer';
import "./ResumeOutput.css";

function ResumeOutput({personalDetails, educationDetails, workExpDetails}) {

    function downloadPDF() {
        // const doc = new jsPDF('portrait', 'pt', 'a4');
        // doc.html(document.getElementById("resume")).then(() => {
        //     doc.save('resume.pdf');
        // });
        let resumePDF = pdf(<ResumePDF format="PDF" personalDetails={personalDetails} educationDetails={educationDetails} workExpDetails={workExpDetails} />);
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
        <>
            {/* <PDFViewer  showToolbar={false} width="595" height="841">
                <ResumePDF format="PDF" personalDetails={personalDetails} />
            </PDFViewer> */}
            <div className='resume-output'>
                <ResumePDF personalDetails={personalDetails} educationDetails={educationDetails} workExpDetails={workExpDetails} />
                <Button classes="download-btn" text="Download" on_click={downloadPDF} />
            </div>
        </>
    );
}

ResumeOutput.propTypes = {
    personalDetails: PropTypes.object,
    educationDetails: PropTypes.array,
    workExpDetails: PropTypes.array
};
  
export default ResumeOutput;