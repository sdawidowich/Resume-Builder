import PropTypes from 'prop-types'
import "./OutputSection.css"

function OutputSectionDetails({ heading, children }) {
    return (
        <div className="output-section">
            <div className="heading blue">{heading}</div>
            <div className="section-underline"></div>
            <div className="body">
                { children }
            </div>
        </div>
    )
}

OutputSectionDetails.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.element
}

export default OutputSectionDetails;