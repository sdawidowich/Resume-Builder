import PropTypes from 'prop-types'
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

function ResumePDF({format, personalDetails, educationDetails, workExpDetails}) {
    let blue = '#004aad'

    Font.register({ family: 'Inter', fonts: [
        { src: './src/assets/fonts/Inter-Regular.ttf' },
        { src: './src/assets/fonts/Inter-Bold.ttf' }
    ]});

    const styles = StyleSheet.create({

        //// Main
        page: {
            fontFamily: 'Inter',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            padding: '32px 64px',
        },

        // Resume Header
        pdfHeader: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '8px'
        },

        name: {
            flex: '0 1 50%',
            display: 'flex',
            flexDirection: 'column',
            color: blue,
            fontSize: '24px',
            fontWeight: 'bold',
            wordBreak: 'break-word'
        },

        contactInfo: {
            flex: '1 0 50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            fontSize: '9.6px'
        },

        //// Resume Section
        section: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '8px'
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

        // Section Item
        sectionItem: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '16px',
            fontSize: '10px'
        },

        sectionItemDate: {
            flex: '1 0 25%'
        },

        sectionItemMain: {
            flex: '1 0 75%'
        },

        itemHeading: {
            color: blue,
            fontWeight: 'bold'
        },

        itemSubheading: {
            fontWeight: 'bold'
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
                                <VIEW style={styles.sectionItem}>
                                    <VIEW style={styles.sectionItemDate}>
                                    </VIEW>
                                    <VIEW style={styles.sectionItemMain}>
                                        <TEXT>{personalDetails.Summary}</TEXT>
                                    </VIEW>
                                </VIEW>
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
                                                    <VIEW style={styles.sectionItemDate}>
                                                        {(item.StartDate || item.EndDate) ? <TEXT className="date">{item.StartDate + " - " + item.EndDate}</TEXT> : null}
                                                    </VIEW>
                                                    <VIEW style={styles.sectionItemMain}>
                                                        <TEXT style={styles.itemHeading}>{item.School}</TEXT>
                                                        <TEXT style={styles.itemSubheading}>{item.Degree}</TEXT>
                                                        <TEXT>{item.GPA}</TEXT>
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
                                                    <VIEW style={styles.sectionItemDate}>
                                                        {(item.StartDate || item.EndDate) ? <TEXT>{item.StartDate + " - " + item.EndDate}</TEXT> : null}
                                                    </VIEW>
                                                    <VIEW style={styles.sectionItemMain}>
                                                        <TEXT style={styles.itemHeading}>{item.Company}</TEXT>
                                                        <TEXT style={styles.itemSubheading}>{item.Position}</TEXT>
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