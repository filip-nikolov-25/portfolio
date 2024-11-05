import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [hovered, setHovered] = useState(null);

  const icons = [
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/filip-nikolov-4a4104306",
      external: true,
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-square-github",
      link: "https://github.com/filip-nikolov-25/Projects",
      external: false,
    },
    {
      name: "Email",
      icon: "fa-solid fa-envelope",
      link: "mailto:filip.nikolov1010@gmail.com",
      external: false,
    },
    {
      name: "CV",
      icon: "fa-solid fa-address-card",
      link: "https://drive.google.com/file/d/146MEkVUsqFJPTOTAqZCJPKIQ7MV9XeSr/view?usp=sharing",
      external: true,
    },
  ];

  return (
    <div className="sticky mt-[-244px] left-0 z-50 top-1/3">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`flex mb-2 items-center p-2 transition-all duration-300 ${
            hovered === index ? "w-40" : "w-12"
          } rounded-r-full hover:bg-gray-700`}
          // @ts-expect-error argument of type number is not assignable to parameter of type setStateAction<null>
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {item.external ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <i className={`${item.icon} text-white text-4xl`} />
            </a>
          ) : (
            <Link to={item.link} className="flex items-center">
              <i className={`${item.icon} text-white text-4xl`} />
            </Link>
          )}
          {hovered === index && (
            <span className="ml-2 text-white">{item.name}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
