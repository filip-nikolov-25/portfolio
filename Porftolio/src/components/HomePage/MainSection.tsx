import React from "react";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="text-center p-5">
      <h1 className="text-5xl text-pink-700">Hi There, my name is</h1>
      <h2 className="text-blue-200 text-7xl mt-4 md:mt-10">Filip Nikolov</h2>
      <h3 className="text-blue-200 text-3xl mt-4 md:mt-10">Front-End Developer</h3>
      <div className="w-full max-w-2xl mx-auto">
        <p className="mt-5 text-blue-200 text-lg">
          Driven and passionate Frontend Developer skilled in JavaScript, React,
          and Next.js, dedicated to crafting seamless, engaging user experiences
          that captivate and retain audiences. With a keen eye for detail and a
          commitment to excellence, I am always refining my skills and expanding
          my knowledge to deliver innovative, high-quality web interfaces. Eager
          to grow within a collaborative environment.
        </p>
      </div>
      <div className="mt-5">
        <i className="fa-solid fa-angle-down text-5xl text-sky-300 hover:text-white"></i>
      </div>
      <Link to={"/about"}>
        <button className="pb-3 mt-5 hover:border-pink-700 hover:border-2 border-2 border-white pt-3 pl-7 pr-7 rounded-2xl bg-blue-300 hover:bg-white hover:text-pink-700 font-bold text-yellow-300 transition-all duration-300">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default MainSection;
