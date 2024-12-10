import { Link } from "react-router-dom";
import Button from "../components/form/Button";

const NotFound = () => {
  return (
    <div className="mt-16">
      <h1 className="text-3xl text-center font-semibold">Not Found</h1>
      <Link to={"/"} className="block mx-auto w-fit mt-1">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
