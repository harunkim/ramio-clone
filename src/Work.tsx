import WorkLeft from "./WorkLeft";
import WorkRight from "./WorkRight";

const Work = () => {
  return (
    <div className="p-0 m-0 grid grid-cols-2 h-screen">
      <WorkLeft />
      <WorkRight />
    </div>
  );
};

export default Work;
