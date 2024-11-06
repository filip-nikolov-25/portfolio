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
                <span className="font-bold text-blue-50">
                  As a passionate 21-year-old Frontend Developer,
                </span>{" "}
                I specialize in building beautiful, interactive web applications
                with JavaScript, React, and Next.js. My goal is to create
                smooth, engaging experiences that keep visitors coming back,
                turning them into loyal users. I’m dedicated to every project,
                making sure each interface not only works well but also stands
                out and meets high standards. I love tackling complex challenges
                and take pride in creating web designs that are modern and match
                the latest trends in the industry. Learning is a big part of my
                journey — I’m always working on my skills, exploring new
                frameworks, and keeping up with new technology. I also believe
                that the best results come from teamwork. Working with others
                brings out creativity and fresh ideas, and I’m excited to grow
                in a supportive, team-focused environment where innovation is
                valued.
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
          <div className="w-full lg:w-1/4 flex justify-center items-center mt-10 lg:mt-0">
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

        <div>
          <h3 className="bg-gray-400 text-center text-white text-3xl rounded-t-2xl mt-5 p-5 mb-5">
            Certificates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl bg-gray-400 gap-8 p-6">
            <img
              src="/images/Certificates/AcademySertificate-FrontPage.png"
              alt="Academy Certificate Front Page"
              className="w-full rounded-xl shadow-xl "
            />
            <img
              src="/images/Certificates/AcademySertificate-BackPage.png"
              alt="Academy Certificate Back Page"
              className="w-full rounded-xl shadow-xl "
            />
            <img
              src="/images/Certificates/Next-Sertificate.png"
              alt="Next Certificate"
              className="w-full rounded-xl shadow-xl "
            />
            <img
              src="/images/Certificates/SparkasseBankSertificate.png"
              alt="Sparkasse Bank Certificate"
              className="w-full rounded-xl shadow-xl "
            />
            <img
              src="/images/Certificates/SavaSertificate.png"
              alt="Sava Certificate"
              className="w-full rounded-xl shadow-xl "
            />
            <img
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
