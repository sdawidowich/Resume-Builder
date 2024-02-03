import PropTypes from 'prop-types'

function OutputSectionDetails({ heading, children }) {
    return (
        <div className="section-output">
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