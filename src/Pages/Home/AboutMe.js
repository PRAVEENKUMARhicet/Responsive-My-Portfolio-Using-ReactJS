import aboutImg from '../../assests/github_image.png';

export default function AboutMe(){
    return(
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src={aboutImg} alt="" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h2 className="skills--section--heading">About Me</h2>
                    <p className="hero--section-description">I'm a dedicated Full-Stack Developer with a passion for creating efficient and user-friendly web applications. With a solid foundation and skilled in HTML, CSS, JavaScript, React Js, MongoDB, MySQL, C, Java and Spring Boot</p>
                    <p className="hero--section-description">Driven by a passion for problem-solving and a curiosity for learning new technologies. I am actively seeking a full-time role where I can contribute to a development team, bring fresh ideas to the table, and grow as a professional.</p>
                </div>
            </div>
        </section>
    )
}