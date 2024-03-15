import PropTypes from 'prop-types'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

function ResumePDF({format, personalDetails, educationDetails, workExpDetails}) {
    let blue = '#004aad'

    const styles = StyleSheet.create({
        page: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            padding: '32px 64px',
        },

        pdfHeader: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },

        name: {
            flex: '0 1 50%',
            display: 'flex',
            flexDirection: 'column',
            color: blue,
            fontSize: '24px',
            wordBreak: 'break-word'
        },

        contactInfo: {
            flex: '1 0 50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            fontSize: '9.6px'
        },

        section: {
            display: 'flex',
            flexDirection: 'column'
        },

        sectionHeading: {
            color: blue,
            fontSize: '12px',
            fontWeight: 'bold',
            paddingBottom: '8px',
            borderBottom: '1px solid ' + blue,
            marginBottom: '8px'
        },

        sectionBody: {
            fontSize: '12px'
        },

        sectionItem: {
            marginBottom: '16px'
        }
    });

    let DOCUMENT = 'div';
    let PAGE = 'div';
    let VIEW = 'div';
    let TEXT = 'div';

    if (format == "PDF") {
        DOCUMENT = Document;
        PAGE = Page;
        VIEW = View;
        TEXT = Text;
    }

    return (
        <DOCUMENT>
            <PAGE size="A4" style={styles.page}>
                <>
                    <VIEW style={styles.pdfHeader}>
                        <>
                            <VIEW style={styles.name}>
                                <TEXT>{personalDetails.FullName}</TEXT>
                            </VIEW>
                            <VIEW style={styles.contactInfo}>
                                <>
                                    <TEXT>{personalDetails.Address}</TEXT>
                                    <TEXT>{personalDetails.Phone}</TEXT>
                                    <TEXT>{personalDetails.Email}</TEXT>
                                </>
                            </VIEW>
                        </>
                    </VIEW>
                    <VIEW style={styles.section}>
                        <>
                            <VIEW style={styles.sectionHeading}>
                                <TEXT>SUMMARY</TEXT>
                            </VIEW>
                            <VIEW style={styles.sectionBody}>
                                <TEXT>{personalDetails.Summary}</TEXT>
                            </VIEW>
                        </>
                    </VIEW>
                    <VIEW style={styles.section}>
                        <>
                            <VIEW style={styles.sectionHeading}>
                                <TEXT>EDUCATION</TEXT>
                            </VIEW>
                            <VIEW style={styles.sectionBody}>
                                <>
                                    {
                                        educationDetails.map((item) => {
                                            return (
                                                <VIEW style={styles.sectionItem} key={item.id + "-output"}>
                                                    <VIEW>
                                                        {(item.StartDate || item.EndDate) ? <TEXT className="date">{item.StartDate + " - " + item.EndDate}</TEXT> : null}
                                                    </VIEW>
                                                    <VIEW>
                                                        <TEXT className='heading blue'>{item.School}</TEXT>
                                                        <TEXT className='sub-heading'>{item.Degree}</TEXT>
                                                        <TEXT className='gpa'>{item.GPA}</TEXT>
                                                    </VIEW>
                                                </VIEW>
                                            )
                                        })
                                    }
                                </>
                            </VIEW>
                        </>
                    </VIEW>
                    <VIEW style={styles.section}>
                        <>
                            <VIEW style={styles.sectionHeading}>
                                <TEXT>WORK EXPERIENCE</TEXT>
                            </VIEW>
                            <VIEW style={styles.sectionBody}>
                                <>
                                    {
                                        workExpDetails.map((item) => {
                                            return (
                                                <VIEW style={styles.sectionItem} key={item.id + "-output"}>
                                                    <VIEW>
                                                        {(item.StartDate || item.EndDate) ? <TEXT>{item.StartDate + " - " + item.EndDate}</TEXT> : null}
                                                    </VIEW>
                                                    <VIEW>
                                                        <TEXT>{item.Company}</TEXT>
                                                        <TEXT>{item.Position}</TEXT>
                                                        <TEXT>{item.Description}</TEXT>
                                                    </VIEW>
                                                </VIEW>
                                            )
                                        })
                                    }
                                </>
                            </VIEW>
                        </>
                    </VIEW>
                </>
            </PAGE>
        </DOCUMENT>
    )
}

ResumePDF.propTypes = {
    format: PropTypes.string,
    personalDetails: PropTypes.object,
    educationDetails: PropTypes.array,
    workExpDetails: PropTypes.array
};

export default ResumePDF;