import PropTypes from 'prop-types'

function OutputPersonalDetails({ personalDetails }) {
    return (
        <div className="output-personalDetails">
            <h2 className='heading'>{personalDetails.FullName}</h2>
            <div className="details">
                <div>{personalDetails.Address}</div>
                <div>{personalDetails.Phone}</div>
                <div>{personalDetails.Email}</div>
                <div>{personalDetails.Summary}</div>
            </div>
        </div>
    )
}

OutputPersonalDetails.propTypes = {
    personalDetails: PropTypes.object
}

export default OutputPersonalDetails;