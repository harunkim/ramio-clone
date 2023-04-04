import { ArrowBackOutline } from "react-ionicons";
import { Link } from "react-router-dom";

const WorkRight = () => {
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
      </div>
    </div>
  );
};

export default WorkRight;
