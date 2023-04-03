import HeroImg from "./HeroImg";
import HeroTxt from "./HeroTxt";

const Hero = () => {
  return (
    <div className="p-0 m-0 grid grid-cols-2 h-screen">
      <HeroTxt />
      <HeroImg />
    </div>
  );
};

export default Hero;
