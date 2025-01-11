import data from "../../data/index.json";
import { FaGithub } from "react-icons/fa";

function MyProject() {
    return (
        <section className="portfolio--section" id="MyProject">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title">Recent Projects</p>
                    <h2 className="skills--section--heading">My Projects</h2>
                </div>
                <div>
                    <a href="https://github.com/PRAVEENKUMARhicet" target="_blank" rel="noopener noreferrer"><button className="btn btn-github"><FaGithub /> Visit My Github</button></a>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={`${item.src}`} alt="" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-md portfolio--section--description">{item.description}</p>
                            </div>
                            <div className="project_links">
                                <a className="btn btn-github" target="_blank" href="https://praveenkumarhicet.github.io/Responsive-My-Portfolio-Using-ReactJS/">
                                    View
                                </a>
                                <a className="btn btn-github" target="_blank" href="https://github.com/PRAVEENKUMARhicet/Responsive-My-Portfolio-Using-ReactJS">
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MyProject;