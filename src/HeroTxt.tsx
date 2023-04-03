import { Link } from "react-router-dom";
import {
  LogoDribbble,
  LogoFacebook,
  LogoGithub,
  LogoTwitter,
} from "react-ionicons";

const HeroTxt = () => {
  return (
    <div className="flex flex-col p-20 justify-between">
      <div className="flex justify-between items-center">
        <div>
          {/* <img src="./assets/react.svg" alt="" /> */}
          <img
            src="https://mixdesign.club/themeforest/ramio/img/ramio-logo.svg"
            alt=""
          />
        </div>
        <div className="flex justify-around">
          <Link
            to="/about"
            className="font-bold p-4 border-b-2 border-b-transparent hover:border-black hover:border-b-2"
          >
            About us
          </Link>
          <Link
            to=""
            className="font-bold p-4 border-b-2 border-b-transparent hover:border-black hover:border-b-2"
          >
            Our works
          </Link>
          <Link
            to=""
            className="font-bold p-4 border-b-2 border-b-transparent hover:border-black hover:border-b-2"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between w-3/4">
        <h1 className=" text-8xl font-extrabold pb-8">
          Nice to <br /> meet you
        </h1>
        <p className="text-2xl pb-8">
          We are preparing something amazing and exciting for you. Special
          surprise for our subscribers only.
        </p>
        <button className=" font-semibold border-solid border-2 border-black py-3 w-1/4">
          Notify Me
        </button>
      </div>
      <div className="flex gap-4">
        <Link to="">
          <LogoFacebook color={"#00000"} height="25px" width="25px" />
        </Link>
        <Link to="">
          <LogoTwitter color={"#00000"} height="25px" width="25px" />
        </Link>
        <Link to="">
          <LogoDribbble color={"#00000"} height="25px" width="25px" />
        </Link>
        <Link to="">
          <LogoGithub color={"#00000"} height="25px" width="25px" />
        </Link>
      </div>
    </div>
  );
};

export default HeroTxt;
