import { useEffect, useState } from "react";
//@ts-expect-error aos has implicit any type
import AOS from "aos";
import "aos/dist/aos.css";
import TechStack from "./TechStack";
import SpaceCanvas from "../SpaceCanvas";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const [corners, setCorners] = useState({ tl: 30, tr: 30, bl: 30, br: 30 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCorners({
        tl: Math.floor(Math.random() * 40) + 20,
        tr: Math.floor(Math.random() * 40) + 20,
        bl: Math.floor(Math.random() * 40) + 20,
        br: Math.floor(Math.random() * 40) + 20,
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020617]">
      <SpaceCanvas />
      
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl pt-32 pb-20">
        
        <div 
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 lg:p-16 rounded-[2rem] shadow-2xl"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-2/3">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-300 text-5xl lg:text-7xl mb-8 font-black tracking-tighter">
              About Me
            </h2>

            <div className="space-y-6 text-slate-300 leading-relaxed text-lg lg:text-xl">
              <p>
                <span className="text-white font-bold text-2xl block mb-2">
                  Building the digital frontier at 22.
                </span>
                I am a Frontend Developer dedicated to creating high-performance, immersive web applications using 
                <span className="text-blue-400 font-semibold"> React, Next.js, and TypeScript</span>.
              </p>

              <div className="p-6 bg-gradient-to-r from-blue-500/10 to-transparent border-l-2 border-blue-500 rounded-r-xl">
                <p className="italic text-blue-100/80">
                  "I specialize in bridging the gap between complex backend logic and fluid, human-centric design."
                </p>
              </div>

              <p>
                Beyond the code, I’m a self-taught guitarist. I find that the discipline of music 
                perfectly complements the creative logic of programming—both require 
                rhythm, structure, and constant iteration.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src="/images/img.jpg"
                style={{
                  borderTopLeftRadius: `${corners.tl}%`,
                  borderTopRightRadius: `${corners.tr}%`,
                  borderBottomLeftRadius: `${corners.bl}%`,
                  borderBottomRightRadius: `${corners.br}%`,
                  transition: "border-radius 2.5s ease-in-out",
                }}
                className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover border border-white/20 shadow-2xl"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        <div className="mt-24" data-aos="fade-up">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-white text-2xl font-bold whitespace-nowrap">Arsenal</h3>
            <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
          <TechStack />
        </div>

        <div className="mt-32"> 
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-white text-3xl lg:text-4xl font-bold whitespace-nowrap">Certifications</h3>
            <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              { src: "AcademyCertificate-FrontPage.png", delay: "0", title: "Academy Graduate" },
              { src: "Next-Certificate.png", delay: "100", title: "Next.js Professional" },
              { src: "SparkasseBankCertificate.png", delay: "200", title: "Financial Tech Hackathon" },
              { src: "InternshipCertificate.jpg", delay: "300", title: "Full-Stack Internship" },
            ].map((cert, idx) => (
              <div 
                key={idx}
                data-aos="zoom-in-up"
                data-aos-delay={cert.delay}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-4 hover:border-blue-500/30 transition-all duration-700 shadow-2xl"
              >
      
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" />
                
                <div className="relative overflow-hidden rounded-[1.8rem]">
                  <img
                    src={`/images/Certificates/${cert.src}`}
                    alt={cert.title}
                    className="w-full h-auto grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                  />
                  
 
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 lg:p-12">
                    <p className="text-blue-400 font-bold text-xs tracking-[0.3em] uppercase mb-2">Verified Achievement</p>
                    <h4 className="text-white text-2xl lg:text-3xl font-bold">{cert.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;