import ResumeImg from '../../assests/resume.jpg';
import resume from '../../assests/resume-Google.pdf';

function Resume() {
    return (
        <section className="Resume--container" id="Resume">
            <div className="resume--section--img">
                <img src={ResumeImg} alt="" style={{ width: "500px", height: "500px" }} />
            </div>
            <div className="resume--section--box">
                <div className="resume--section--content">
                    <h1 className="skills--section--heading">Resume</h1>
                </div>
                <div className="resume--section--download">
                    <p>Download My Resume</p>
                    <a href={resume} download='resume' className="btn hero--section--btn resume--btn">Download CV</a>
                </div>
            </div>
        </section>
    )
}
export default Resume;