import PropTypes from 'prop-types'
import "./OutputSectionItem.css"

function OutputSectionItem({itemDetails, children}) {
    return (
        <div className="section-item">
            <div className="item-date">{(itemDetails.StartDate || itemDetails.EndDate) ? <div className="date">{itemDetails.StartDate + " - " + itemDetails.EndDate}</div> : null}</div>
            <div className="item-main">{children}</div>
        </div>
    );
}

OutputSectionItem.propTypes = {
    itemDetails: PropTypes.object,
    children: PropTypes.element
}

export default OutputSectionItem;