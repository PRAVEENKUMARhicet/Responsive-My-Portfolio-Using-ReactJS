import heroImg from '../../assests/portfolio_img.png';
import resume from '../../assests/praveen-resume.pdf';

function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        Hey, I'm <span className="hero--section--title--color" style={{ marginLeft: "10px" }}>PRAVEEN</span>KUMAR
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        I'm a passionate Full-Stack Developer with a strong foundation in building dynamic web applications. Currently seeking a full-time role where I can contribute to innovative solutions and continue growing as a developer.
                    </p>
                </div>
                <a href={resume} download='resume' className="btn hero--section--btn hero--btn" rel="noreferrer">My Resume</a>
            </div>
            <div className="hero--section--img">
                <img src={heroImg} alt="My_image" />
            </div>
        </section>
    )
}
export default HeroSection;