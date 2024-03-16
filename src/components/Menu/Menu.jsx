import PropTypes from 'prop-types'
import "./Menu.css"
import Button from '../Button/Button';

let sampleResume = {
    personalDetails: {
        id: crypto.randomUUID(),
        FullName: "John Doe",
        Location: "Madison, WI",
        Phone: "(123) 456-7890",
        Email: "johndoe54@gmail.com",
        Summary: "Motivated and detail-oriented Software Engineer with demonstrated success in designing, developing and maintaining software systems to increase organizational productivity and performance. Seeking to leverage strong leadership skills and technical know-how to bring valuable solutions to grow business success at your company."
    },
    educationDetails: [
        {
            id: crypto.randomUUID(),
            headerKey: "School",
            School: "Princeton University",
            Degree: "B.S. in Computer Science",
            Date: "Sept 2019 - May 2023",
            GPA: "3.85"
        },
        {
            id: crypto.randomUUID(),
            headerKey: "School",
            School: "Princeton University",
            Degree: "M.S. in Computer Science",
            Date: "Sept 2023 - Present",
            GPA: "3.9"
        }
    ],
    workExpDetails: [
        {
            id: crypto.randomUUID(),
            headerKey: "Company",
            Company: "Microsoft",
            Position: "Software Engineer Intern",
            Date: "May 2023 - Aug 2023",
            Description: "Developed technical specifications and designs that met customer requirements and business needs\nUtilized best practices and cutting-edge technologies to optimize software for best performance\nLed design review sessions for resolving software issues, resulting in significant cost savings for the company"
        }
    ]
}

function Menu({menuState, setMenuState, setResumeDetails}) {

    return (
        <div className="menu">
            <Button text="Load Sample Resume" on_click={() => {setResumeDetails(sampleResume)}} />
        </div>
    );
}

Menu.propTypes = {
    menuState: PropTypes.number,
    setMenuState: PropTypes.func,
    setResumeDetails: PropTypes.func
};

export default Menu;
