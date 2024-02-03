import PropTypes from 'prop-types'

function OutputSectionDetails({ heading, children }) {
    return (
        <div className="output-section">
            <h3 className="section-heading">{heading}</h3>
            { children }
        </div>
    )
}

OutputSectionDetails.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.element
}

export default OutputSectionDetails;