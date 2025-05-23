import { useEffect } from "react";
import { Link } from "react-router-dom";
//@ts-expect-error aos has implicit any type
import AOS from "aos";
import "aos/dist/aos.css";

const MainSection = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div
      className="text-center p-3 sm:p-4 md:p-5"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <h2 className="text-2xl sm:text-3xl md:text-6xl mb-6 sm:mb-8 md:mt-4 text-blue-200">
        Filip Nikolov
      </h2>
      <h3 className="text-base sm:text-lg md:text-3xl mt-1 md:mt-3 text-blue-200">
        Front-End Developer
      </h3>

      <div className="w-full max-w-2xl mx-auto">
        <p className="mt-3 md:mt-4 text-blue-200 text-sm sm:text-base md:text-lg leading-relaxed">
          I’m a Frontend Developer with solid experience building smooth,
          engaging websites using JavaScript, React, and Next.js. Alongside
          frontend development, I have hands-on experience with backend
          technologies like Node.js, GraphQL, and PostgreSQL. I’m passionate
          about delivering high-quality, user-friendly interfaces and solving
          complex challenges through clean, efficient code. I love working in
          teams where collaboration sparks creativity and drives better results.
          Committed to continuous learning and collaboration, I thrive in
          environments where I can contribute to impactful projects.
        </p>
      </div>

      <div className="mt-3 md:mt-4">
        <i className="fa-solid fa-angle-down text-3xl sm:text-4xl md:text-5xl text-sky-300 hover:text-white"></i>
      </div>

      <Link to={"/about"}>
        <button className="mt-3 md:mt-4 pb-2 pt-2 px-5 sm:px-6 rounded-xl border-2 border-white bg-blue-300 text-xs sm:text-sm md:text-xl text-white hover:bg-white hover:text-pink-700 hover:border-pink-700 transition-all duration-300">
          Get to know me
        </button>
      </Link>
    </div>
  );
};

export default MainSection;
