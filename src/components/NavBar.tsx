import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const pathname = useLocation().pathname;

  return (
<div className="flex justify-between pt-6 pb-6 border-b-2 border-white 
  pl-5 pr-5 sticky top-0 z-20 bg-white/10 backdrop-blur-md shadow-lg">

      <Link to={"/"}>
        <div className="text-gray-400 hover:text-white font-bold text-xl md:text-2xl">
          FN
        </div>
      </Link>
      <div>
        <ul className="flex space-x-4 md:space-x-5">
          <Link to={"/"}>
            <li
              className={`${
                pathname === "/" ? "text-white" : "text-gray-400"
              } text-base md:text-lg hover:underline-offset-8 hover:underline hover:text-white cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li
              className={`${
                pathname === "/about"
                  ? "text-white underline-offset-8 underline"
                  : "text-gray-400"
              } text-base md:text-lg hover:underline-offset-8 hover:underline hover:text-white cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link to={"/projects"}>
            <li
              className={`${
                pathname === "/projects"
                  ? "text-white underline-offset-8 underline"
                  : "text-gray-400"
              } text-base md:text-lg hover:underline-offset-8 hover:underline hover:text-white cursor-pointer`}
            >
              Projects
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
