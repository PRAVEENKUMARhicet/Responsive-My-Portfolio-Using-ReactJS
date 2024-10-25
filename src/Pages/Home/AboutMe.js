import aboutImg from '../../assests/github_image.png';

function AboutMe() {
    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src={aboutImg} alt="" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h2 className="skills--section--heading">About Me</h2>
                    <p className="hero--section-description">I am a dedicated Full-Stack Developer with expertise in HTML, CSS, JavaScript, React, MongoDB, MySQL, C, Java, and Spring Boot. I have a strong passion for creating efficient and user-friendly web applications.</p>
                    <p className="hero--section-description">Driven by a curiosity for learning new technologies and a love for problem-solving, I am actively seeking a full-time role where I can contribute to a development team, share innovative ideas, and continue to grow professionally.</p>
                </div>
            </div>
        </section>
    )
}
export default AboutMe;