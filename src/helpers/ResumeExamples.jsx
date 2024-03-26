import { EducationDetails, WorkExpDetails } from "./DetailsClasses";

export function SampleResume() {
    let sampleResume = {
        personalDetails: {
            id: crypto.randomUUID(),
            FullName: "John Doe",
            Location: "Madison, WI",
            Phone: "(123) 456-7890",
            Email: "johndoe54@gmail.com",
            Link: "https://www.linkedin.com/in/john-doe/",
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
        ],
        skills: [
            {
                id: crypto.randomUUID(),
                Skill: "JavaScript"
            },
            {
                id: crypto.randomUUID(),
                Skill: "React.js"
            },
            {
                id: crypto.randomUUID(),
                Skill: "SQL"
            },
            {
                id: crypto.randomUUID(),
                Skill: "Python"
            },
            {
                id: crypto.randomUUID(),
                Skill: "C++"
            },
            {
                id: crypto.randomUUID(),
                Skill: "Unit Testing"
            },
            {
                id: crypto.randomUUID(),
                Skill: "Problem Solving"
            },
            {
                id: crypto.randomUUID(),
                Skill: "Customer Service"
            }
        ]
    }

    return sampleResume;
}

export function EmptyResume() {
    let sampleResume = {
        personalDetails: {
            id: crypto.randomUUID()
        },
        educationDetails: [
            new EducationDetails()
        ],
        workExpDetails: [
            new WorkExpDetails()
        ],
        skills: [
            {
                id: crypto.randomUUID()
            }
        ]
    }

    return sampleResume;
}
