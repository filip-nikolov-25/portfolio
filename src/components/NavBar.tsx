import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const pathname = useLocation().pathname;
  return (
    <div className="flex bg-gradient-to-r from-blue-950 to-purple-900 justify-between pt-6 pb-6 border-b-2 border-b-white pl-20 pr-20 sticky top-0 z-20">
      <Link to={"/"}>
        <div className="text-gray-400  hover:text-white font-bold">FN</div>
      </Link>
      <div>
        <ul className="flex space-x-5">
          <Link to={"/"}>
            <li
              className={` ${
                pathname === "/" ? "text-white" : "text-gray-400"
              }  hover:underline-offset-8  hover:underline hover:text-white cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li
              className={` ${
                pathname === "/about" ? "text-white" : "text-gray-400"
              }  hover:underline-offset-8  hover:underline hover:text-white cursor-pointer`}
            >
              About
            </li>
          </Link>

          <Link to={"/projects"}>
            <li
              className={` ${
                pathname === "/projects" ? "text-white" : "text-gray-400"
              }  hover:underline-offset-8  hover:underline hover:text-white cursor-pointer`}
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
