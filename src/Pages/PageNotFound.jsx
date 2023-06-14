import { Link } from "react-router-dom";
import PageNot from "../Assets/notFound.png";
import UseTitle from "../Hooks/UseTitle";

const PageNotFound = () => {
  UseTitle("Page Not FOund");
  return (
    <div className="max-w-xl m-auto text-center">
      <img src={PageNot} alt="" />
      <Link to="/">
        <button className="bg-blue-500 mt-5 p-5 text-white font-bold rounded">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
