import { useEffect, useState } from "react";
//@ts-expect-error aos has implicity any type
import AOS from "aos";
import "aos/dist/aos.css";
import TechStack from "./TechStack";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

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
          <div
            className="w-full lg:w-3/4 p-10 lg:p-20"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="text-blue-200 text-6xl mb-20 font-bold">About Me</h2>
            <div className="text-blue-300 text-lg">
              <p className="mt-4">
                <span className="font-bold text-blue-50">
                  As a passionate 21-year-old Frontend Developer,
                </span>{" "}
                I build interactive web apps using JavaScript, React, and
                Next.js, aiming to make them both smooth and engaging so
                visitors want to come back. I put a lot of effort into every
                project, making sure each design not only works well but also
                looks great and meets high standards. I enjoy solving tough
                problems and creating modern web designs that keep up with the
                latest trends. I’m always working to improve my skills, trying
                out new tools, and staying updated on tech. I also believe in
                teamwork — it sparks new ideas and brings out the best results.
                I'm excited to grow in a team that values creativity and
                collaboration.
              </p>
              <p className="mt-10">
                Beyond coding, I’m a self-taught guitarist with a big love for
                music. Music inspires me in my work and keeps me creative. I
                also enjoy traveling and exploring new places, connecting with
                different cultures, and sharing my passion for music along the
                way. Let’s work together to create digital experiences that
                people will enjoy and remember!
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-1/4 flex justify-center items-center mt-10 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img
              src="/images/img.jpg"
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
        <TechStack />
        <hr className="w-full my-10" />

        <div>
          <h3 className="bg-gray-400 text-center text-white text-3xl rounded-t-2xl mt-5 p-5 mb-5">
            Certificates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl bg-gray-400 gap-8 p-6">
            <img
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              src="/images/Certificates/AcademySertificate-FrontPage.png"
              alt="Academy Certificate Front Page"
              className="w-full rounded-xl shadow-xl "
            />
            <img
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2000"
              src="/images/Certificates/AcademySertificate-BackPage.png"
              alt="Academy Certificate Back Page"
              className="w-full rounded-xl shadow-xl "
            />
            <img
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="3000"
              src="/images/Certificates/Next-Sertificate.png"
              alt="Next Certificate"
              className="w-full rounded-xl shadow-xl "
            />
            <img
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              src="/images/Certificates/SparkasseBankSertificate.png"
              alt="Sparkasse Bank Certificate"
              className="w-full rounded-xl shadow-xl "
            />
            <img
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
              src="/images/Certificates/SavaSertificate.png"
              alt="Sava Certificate"
              className="w-full rounded-xl shadow-xl "
            />
            <img
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="3000"
              src="/images/Certificates/LargerWorldSertificate.png"
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
