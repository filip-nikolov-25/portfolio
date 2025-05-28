import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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
      link: "https://drive.google.com/file/d/1qqxE3qJzT_8BQT35qbmxBiInBDv94MxH/view",
      external: true,
    },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 425px)");
    const updateMobile = (e: MediaQueryList | MediaQueryListEvent) =>
      setIsMobile(e.matches);

    updateMobile(mediaQuery);
    mediaQuery.addEventListener("change", updateMobile);
    return () => mediaQuery.removeEventListener("change", updateMobile);
  }, []);

  return (
    <div
      className={`fixed z-50 ${
        isMobile
          ? "bottom-[-3px] left-1/2 transform -translate-x-1/2   flex flex-row gap-3"
          : "top-1/3 left-0 flex flex-col"
      }`}
    >
      {icons.map((item, index) => {
        const content = (
          <div
            className={`flex items-center p-3 rounded-full transition-all duration-300 hover:bg-gray-700 ${
              isMobile ? "flex-col" : "flex-row w-12 hover:w-40"
            }`}
            onMouseEnter={() => !isMobile && setHovered(index)}
            onMouseLeave={() => !isMobile && setHovered(null)}
          >
            <i className={`${item.icon}  ${isMobile ? "text-4xl text-blue-200" : "text-5xl text-white"} `} />
            {!isMobile && hovered === index && (
              <span className="ml-2 text-white">{item.name}</span>
            )}
          </div>
        );

        return item.external ? (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        ) : (
          <Link key={index} to={item.link}>
            {content}
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
