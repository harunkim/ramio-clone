import { ArrowBackOutline } from "react-ionicons";
import { Link } from "react-router-dom";

const AboutText = () => {
  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="flex flex-col justify-between p-24">
        <div>
          <button title="home" className=" border-black border-2 p-2">
            <Link to="/">
              <ArrowBackOutline color={"#00000"} height="30px" width="30px" />
            </Link>
          </button>
        </div>
        <div className="flex flex-col mt-12">
          <h1 className=" font-black text-7xl mb-2">About us</h1>
          <h2 className="text-3xl mb-2">
            <span className=" font-bold">Just awesome</span>{" "}
            <span className=" italic">template</span>
          </h2>
          <p className="text-lg">
            I wonder if I've been changed in the night? Let me think. Was I the
            same when I got up this morning? I almost think I can remember
            feeling a <span className=" underline"> little different</span> .
            But if I'm not the same, the next question is 'Who in the world am
            I?' Ah, that's the great puzzle!
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2">
        <div
          className=" h-96 w-full bg-center bg-cover"
          style={{
            backgroundImage: `url(	https://mixdesign.club/themeforest/ramio/img/features/feature-1.jpg)`,
          }}
        ></div>
        <div className=" flex flex-col self-center items-center px-16">
          <h3 className="font-semibold text-xl">EYE CATCHING DESIGN</h3>
          <p>
            Have i gone mad? Im afraid so, but let me tell you something, the
            best people usualy are.
          </p>
        </div>
        <div className=" flex flex-col self-center items-center px-16">
          <h3 className="font-semibold text-xl">EYE CATCHING DESIGN</h3>
          <p>
            Have i gone mad? Im afraid so, but let me tell you something, the
            best people usualy are.
          </p>
        </div>
        <div
          className=" h-96 w-full bg-center bg-cover"
          style={{
            backgroundImage: `url(	https://mixdesign.club/themeforest/ramio/img/features/feature-1.jpg)`,
          }}
        ></div>
        <div
          className=" h-96 w-full bg-center bg-cover"
          style={{
            backgroundImage: `url(	https://mixdesign.club/themeforest/ramio/img/features/feature-1.jpg)`,
          }}
        ></div>
        <div className=" flex flex-col self-center items-center px-16">
          <h3 className="font-semibold text-xl">EYE CATCHING DESIGN</h3>
          <p>
            Have i gone mad? Im afraid so, but let me tell you something, the
            best people usualy are.
          </p>
        </div>
        <div className=" flex flex-col self-center items-center px-16">
          <h3 className="font-semibold text-xl">EYE CATCHING DESIGN</h3>
          <p>
            Have i gone mad? Im afraid so, but let me tell you something, the
            best people usualy are.
          </p>
        </div>
        <div
          className=" h-96 w-full bg-center bg-cover"
          style={{
            backgroundImage: `url(	https://mixdesign.club/themeforest/ramio/img/features/feature-1.jpg)`,
          }}
        ></div>
      </div>
      <div>
        <div className="h-120 w-full bg-aboutLast">
          <div className="flex flex-col p-24 text-white">
            <p className=" font-black text-7xl mb-2 ">"</p>
            <p className="text-3xl mb-12">
              <span className=" italic">
                My dear, here we must run as fast as we can, just to stay in
                place. And if you wish to go anywhere you must run twice as fast
                as that.
              </span>
            </p>
            <p>Lewis Carroll</p>
            <p>Alice in Wonderland</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
