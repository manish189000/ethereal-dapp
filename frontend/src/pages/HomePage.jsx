import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="text-black">HomePage</div>
      <Link to={"/user/dashboard"}>
        <button className="text-black border">Dashboard</button>
      </Link>
    </>
  );
};

export default HomePage;
