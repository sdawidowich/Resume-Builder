import PropTypes from 'prop-types'
import "./OutputPersonalDetails.css"

function OutputPersonalDetails({ personalDetails }) {
    return (
        <div className="output-personalDetails">
            <div className='heading blue'>{personalDetails.FullName}</div>
            <div className="details">
                <div className='address'>{personalDetails.Address}</div>
                <div className='phone'>{personalDetails.Phone}</div>
                <div className='email'>{personalDetails.Email}</div>
            </div>
        </div>
    )
}

OutputPersonalDetails.propTypes = {
    personalDetails: PropTypes.object
}

export default OutputPersonalDetails;