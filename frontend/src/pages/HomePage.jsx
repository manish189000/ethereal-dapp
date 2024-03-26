import { Link } from "react-router-dom";
import heroImage from "../assets/New folder/galaxy.gif";
import BrandLogo from "../assets/New folder/brand-logo.png";

const HomePage = () => {
  return (
    <>
      <div className="text-black ">HomePage</div>
      <Link to={"/user/dashboard"}>
        <button className="text-black border">Dashboard</button>
      </Link>

      <div
        className="hero-section w-full h-[auto] bg-black"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="inner-hero w-[100%]  h-[9rem] flex justify-center   ">
          <img src={BrandLogo}></img>
        </div>
        <div className="after-hero-section"></div>
      </div>
    </>
  );
};

export default HomePage;
