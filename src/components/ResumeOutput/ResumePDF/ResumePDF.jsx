import PropTypes from 'prop-types';
import InterRegular from "../../../assets/fonts/Inter-Regular.ttf";
import InterBold from "../../../assets/fonts/Inter-Bold.ttf";
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { LinkIcon, LocationIcon, MailIcon, PhoneIcon } from '../../../helpers/Icon';


// Load Fonts
Font.register({ family: 'Inter', fonts: [
    { src: InterRegular },
    { src: InterBold }
]});
Font.registerHyphenationCallback(word => [word]);

// Define colors
let blue = '#004aad';
let grey = 'grey';

// Resume Stylesheet
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

    contactInfoItem: {
        flex: '0 0 auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '4px'
    },

    contactInfoText: {
        paddingRight: '4px'
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
        flex: '1 0 25%',
        color: grey
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

function ResumePDF({format, personalDetails, educationDetails, workExpDetails, skills}) {
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
                <VIEW style={styles.pdfHeader}>
                    <VIEW style={styles.name}>
                        <TEXT>{personalDetails.FullName}</TEXT>
                    </VIEW>
                    <VIEW style={styles.contactInfo}>
                        <VIEW style={styles.contactInfoItem}>
                            <TEXT style={styles.contactInfoText}>{personalDetails.Location}</TEXT>
                            <LocationIcon format={format} width="12" height="12" />
                        </VIEW>
                        <VIEW style={styles.contactInfoItem}>
                            <TEXT style={styles.contactInfoText}>{personalDetails.Phone}</TEXT>
                            <PhoneIcon format={format} width="12" height="12" />
                        </VIEW>
                        <VIEW style={styles.contactInfoItem}>
                            <TEXT style={styles.contactInfoText}>{personalDetails.Email}</TEXT>
                            <MailIcon format={format} width="12" height="12" />
                        </VIEW>
                        <VIEW style={styles.contactInfoItem}>
                            <TEXT style={styles.contactInfoText}>{personalDetails.Link}</TEXT>
                            <LinkIcon format={format} width="12" height="12" />
                        </VIEW>
                    </VIEW>
                </VIEW>
                <VIEW style={styles.section}>
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
                </VIEW>
                <VIEW style={styles.section}>
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
                                                {item.Date ? <TEXT>{item.Date}</TEXT> : null}
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
                </VIEW>
                <VIEW style={styles.section}>
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
                                                {item.Date ? <TEXT>{item.Date}</TEXT> : null}
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
                </VIEW>
                <VIEW style={styles.section}>
                    <VIEW style={styles.sectionHeading}>
                        <TEXT>SKILLS</TEXT>
                    </VIEW>
                    <VIEW style={styles.sectionBody}>
                        <>
                            {
                                skills.map((item) => {
                                    return (
                                        <VIEW style={styles.sectionItem} key={item.id + "-output"}>
                                            <VIEW style={styles.sectionItemDate}></VIEW>
                                            <VIEW style={styles.sectionItemMain}>
                                                <TEXT>{item.Skill}</TEXT>
                                            </VIEW>
                                        </VIEW>
                                    )
                                })
                            }
                        </>
                    </VIEW>
                </VIEW>
            </PAGE>
        </DOCUMENT>
    )
}

ResumePDF.propTypes = {
    format: PropTypes.string,
    personalDetails: PropTypes.object,
    educationDetails: PropTypes.array,
    workExpDetails: PropTypes.array,
    skills: PropTypes.array
};

export default ResumePDF;