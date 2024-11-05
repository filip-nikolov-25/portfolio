import { useEffect, useState } from "react";

const AboutMe = () => {
  const [corners, setCorners] = useState({
    tl: 20,
    tr: 20,
    bl: 20,
    br: 20,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCorners((prevCorners) => {
        const newTl = prevCorners.tl >= 40 ? 20 : prevCorners.tl + 3;
        const newTr = prevCorners.tr >= 60 ? 20 : prevCorners.tr + 5;
        const newBl = prevCorners.bl >= 60 ? 20 : prevCorners.bl + 5;
        const newBr = prevCorners.br >= 40 ? 20 : prevCorners.br + 3;
        return { tl: newTl, tr: newTr, bl: newBl, br: newBr };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-l from-purple-900 to-blue-950">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4 p-10 lg:p-20">
            <h2 className="text-blue-200 text-6xl mb-20 font-bold">About Me</h2>
            <div className="text-blue-300 text-lg">
              <p className="mt-4">
                Dynamic and Passionate Frontend Developer As a driven and
                enthusiastic{" "}
                <span className="font-bold text-blue-50">
                  21-year-old Frontend Developer,
                </span>{" "}
                I specialize in harnessing the power of JavaScript, React, and
                Next.js to create visually stunning and highly interactive web
                applications. My dedication to crafting seamless, engaging user
                experiences allows me to captivate and retain audiences,
                transforming visitors into loyal users. With a keen eye for
                detail, I approach every project with a commitment to
                excellence, ensuring that each interface not only meets but
                exceeds user expectations. I thrive on the challenge of solving
                complex problems and take pride in delivering innovative,
                high-quality web interfaces that reflect the latest industry
                trends and technologies. My journey in web development is fueled
                by an insatiable curiosity and a passion for learning. I am
                continually refining my skills, exploring new frameworks, and
                expanding my knowledge to stay at the forefront of the
                ever-evolving tech landscape. I believe that collaboration is
                key to success, and I am eager to grow within a dynamic,
                team-oriented environment where creativity and innovation
                flourish.
              </p>
              <p className="mt-10">
                Beyond coding, I am a self-taught guitarist with a love for
                music, which serves as a constant source of inspiration in my
                work. I enjoy traveling and exploring new places, immersing
                myself in diverse cultures, and sharing my passion for music
                wherever I go. Let’s work together to build exceptional digital
                experiences that resonate and inspire!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/4 flex justify-center items-center mt-10 lg:mt-0">
            <img
              src="../../../public/images/img.jpg"
              style={{
                borderTopLeftRadius: `${corners.tl}%`,
                borderTopRightRadius: `${corners.tr}%`,
                borderBottomLeftRadius: `${corners.bl}%`,
                borderBottomRightRadius: `${corners.br}%`,
                transition: "border-radius 1s ease-in-out",
              }}
              className="w-[75%] max-w-sm border-4 border-blue-200"
              alt="About Me"
            />
          </div>
        </div>
        <hr className="w-full my-5" />

        <div>
          <h3 className="bg-gray-400 text-center text-white text-3xl rounded-t-2xl mt-5 p-5 mb-5">Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl bg-gray-400 gap-8 p-6">
            <img
              src="../../../public/images/Certificates/AcademySertificate-FrontPage.png"
              alt="Academy Certificate Front Page"
              className="w-full rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
            <img
              src="../../../public/images/Certificates/AcademySertificate-BackPage.png"
              alt="Academy Certificate Back Page"
              className="w-full rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
            <img
              src="../../../public/images/Certificates/Next-Sertificate.png"
              alt="Next Certificate"
              className="w-full rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
            <img
              src="../../../public/images/Certificates/SparkasseBankSertificate.png"
              alt="Sparkasse Bank Certificate"
              className="w-full rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
            <img
              src="../../../public/images/Certificates/SavaSertificate.png"
              alt="Sava Certificate"
              className="w-full rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
            <img
              src="../../../public/images/Certificates/LargerWorldSertificate.png"
              alt="Larger World Certificate"
              className="w-full rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
