import PropTypes from 'prop-types'
import Button from '../Button/Button';
import { EmptyResume, SampleResume } from '../../helpers/ResumeExamples';
import "./Menu.css"

function Menu({menuState, setMenuState, personalDetails, educationDetails, workExpDetails, setResumeDetails}) {

    let sample = SampleResume();
    let emptyResume = EmptyResume();

    return (
        <div className="menu">
            <Button text="Load Sample Resume" on_click={() => {setResumeDetails(sample)}} />
            <Button text="Clear Resume" on_click={() => {setResumeDetails(emptyResume)}} />
        </div>
    );
}

Menu.propTypes = {
    menuState: PropTypes.number,
    setMenuState: PropTypes.func,
    personalDetails: PropTypes.object,
    educationDetails: PropTypes.array,
    workExpDetails: PropTypes.array, 
    setResumeDetails: PropTypes.func
};

export default Menu;
