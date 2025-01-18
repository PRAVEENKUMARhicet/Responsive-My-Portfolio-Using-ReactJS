import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyProject from "../Myproject";
import MySkill from "../MySkill";

function Components() {
    return (
        <div>
            <HeroSection />
            <AboutMe />
            <MySkill />
            <MyProject />
            <ContactMe />
            <Footer />
        </div>
    );
}
export default Components;