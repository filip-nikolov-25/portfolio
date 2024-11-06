import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="text-center p-4 md:p-5">
      <h1 className="text-4xl md:text-5xl text-green-300">
        Hi There, my name is
      </h1>
      <h2 className="text-5xl md:text-7xl mt-3 md:mt-6 text-blue-200">
        Filip Nikolov
      </h2>
      <h3 className="text-2xl md:text-3xl mt-2 md:mt-4 text-blue-200">
        Front-End Developer
      </h3>

      <div className="w-full max-w-lg mx-auto">
        <p className="mt-4 md:mt-5 text-blue-200 text-base md:text-lg leading-relaxed">
          I'm a Frontend Developer who loves building smooth and engaging
          websites. Skilled in JavaScript, React, and Next.js, I'm always
          working to improve my abilities and learn new things. I pay close
          attention to details and take pride in creating easy-to-use,
          high-quality interfaces. I'm excited to work in a team where I can
          grow and make an impact.
        </p>
      </div>

      <div className="mt-4 md:mt-5">
        <i className="fa-solid fa-angle-down text-4xl md:text-5xl text-sky-300 hover:text-white"></i>
      </div>

      <Link to={"/about"}>
        <button
          className="mt-4 md:mt-5 pb-2 pt-2 px-5 rounded-xl border-2 border-white bg-blue-300 text-yellow-300 font-bold hover:bg-white hover:text-pink-700 hover:border-pink-700 transition-all duration-300"
        >
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default MainSection;
