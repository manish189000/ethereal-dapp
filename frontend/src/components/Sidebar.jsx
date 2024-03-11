import { Link } from "react-router-dom";
import db_icon from "../assets/dbicon.svg";
import node_icon from "../assets/nodeicon.svg";

const Sidebar = () => {
  return (
    <div className="w-[15%] h-full bg-[#08090A] flex flex-col py-3">
      <Link
        to={"/dashboard"}
        className="flex hover:bg-[#081112] focus:bg-[#081112] focus:opacity-100 items-center justify-start px-4 py-3 my-1 gap-3 opacity-30"
      >
        <img src={db_icon} className="text-xl" />
        <span className="text-[#0BFFFF] font-lw">DASHBOARD</span>
      </Link>
      <Link
        to={"node"}
        className="flex hover:bg-[#081112] focus:bg-[#081112] focus:opacity-100 items-center justify-start px-4 py-3 my-1 gap-3 opacity-30"
      >
        <img src={node_icon} className="text-xl" />
        <span className="text-[#0BFFFF] font-lw">NODE</span>
      </Link>
      <Link
        to={"withdraw"}
        className="flex hover:bg-[#081112] focus:bg-[#081112] focus:opacity-100 items-center justify-start px-4 py-3 my-1 gap-3 opacity-30"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="32"
            height="32"
            rx="6"
            fill="#0BFFFF"
            color="#0BFFFF"
            fillOpacity="0.12"
          />
          <g opacity="0.5">
            <path
              d="M23.5 18.25C23.5 21.1525 21.1525 23.5 18.25 23.5L19.0375 22.1875"
              stroke="#0BFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 13.75C8.5 10.8475 10.8475 8.5 13.75 8.5L12.9625 9.8125"
              stroke="#0BFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.5 10.15V10.2325C23.5 10.4425 23.335 10.6075 23.125 10.6075H16.375C16.165 10.6075 16 10.4425 16 10.2325V10.15C16 8.83 16.33 8.5 17.665 8.5H21.835C23.17 8.5 23.5 8.83 23.5 10.15Z"
              fill="#0BFFFF"
            />
            <path
              d="M16.375 11.3575C16.165 11.3575 16 11.5225 16 11.7325V12.4825V13.225C16 14.545 16.33 14.875 17.665 14.875H21.835C23.17 14.875 23.5 14.545 23.5 13.225V12.4825V11.7325C23.5 11.5225 23.335 11.3575 23.125 11.3575H16.375Z"
              fill="#0BFFFF"
            />
            <path
              d="M16 18.775V18.8575C16 19.0675 15.835 19.2325 15.625 19.2325H8.875C8.665 19.2325 8.5 19.0675 8.5 18.8575V18.775C8.5 17.455 8.83 17.125 10.165 17.125H14.335C15.67 17.125 16 17.455 16 18.775Z"
              fill="#0BFFFF"
            />
            <path
              d="M8.875 19.9825C8.665 19.9825 8.5 20.1475 8.5 20.3575V21.1075V21.85C8.5 23.17 8.83 23.5 10.165 23.5H14.335C15.67 23.5 16 23.17 16 21.85V21.1075V20.3575C16 20.1475 15.835 19.9825 15.625 19.9825H8.875Z"
              fill="#0BFFFF"
            />
          </g>
        </svg>

        <span className="text-[#0BFFFF] font-lw">WITHDRAW</span>
      </Link>
    </div>
  );
};

export default Sidebar;
