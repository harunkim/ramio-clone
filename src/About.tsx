import AboutHero from "./AboutHero";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div className="p-0 m-0 grid grid-cols-2 h-screen">
      <AboutHero />
      <AboutText />
    </div>
  );
};

export default About;
