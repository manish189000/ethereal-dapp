import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="text-black">HomePage</div>
      <Link to={"/dashboard/dashboard"}>
        <button className="text-black border">Dashboard</button>
      </Link>
    </>
  );
};

export default HomePage;
