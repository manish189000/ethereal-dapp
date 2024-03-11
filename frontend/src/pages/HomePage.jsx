import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>

      <Link to={"/dashboard"}>
        <button>Dashboard</button>
      </Link>
    </>
  );
};

export default HomePage;
