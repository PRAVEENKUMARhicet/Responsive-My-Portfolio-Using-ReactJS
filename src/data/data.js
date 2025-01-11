import frontend_img from "../assests/frontend.png";
import backend_img from "../assests/backend.png";
import database from "../assests/database.png";
import tools from "../assests/tools.png";

export const SKILLS = [
    {
        title: "Frontend",
        icon: frontend_img,
        skills: [
            { skill: "HTML5", percentage: "90%" },
            { skill: "CSS3", percentage: "80%" },
            { skill: "JavaScript", percentage: "80%" },
            { skill: "React Js", percentage: "75%" }
        ],
    },
    {
        title: "Backend",
        icon: backend_img,
        skills: [
            { skill: "Java", percentage: "90%" },
            { skill: "C", percentage: "90%" },
            { skill: "DSA(Java)", percentage: "75%" },
            { skill: "DSA(C Programming)", percentage: "80%" }
        ],
    },
    {
        title: "Database",
        icon: database,
        skills: [
            { skill: "MySql", percentage: "70%" },
            { skill: "MongoDB", percentage: "85%" }
        ],
    },
    {
        title: "Tools and Soft Skills",
        icon: tools,
        skills: [
            { skill: "Problem-solving", percentage: "70%" },
            { skill: "Collabration", percentage: "80%" },
            { skill: "Git & GitHub", percentage: "85%" },
            { skill: "Visual Studio Code", percentage: "70%" },
            { skill: "Eclipse", percentage: "65%" }
        ],
    }
]