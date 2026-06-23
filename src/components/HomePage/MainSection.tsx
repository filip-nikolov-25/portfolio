import { useEffect } from "react";
import { Link } from "react-router-dom";
//@ts-expect-error aos has implicit any type
import AOS from "aos";
import "aos/dist/aos.css";

const MainSection = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full px-4 relative z-20">
      
      <div 
        data-aos="fade-down" 
        className="mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md shadow-lg shadow-blue-500/5"
      >
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-[11px] font-bold tracking-[0.2em] text-blue-300 uppercase">
          Open to new opportunities
        </span>
      </div>

      <h1 
        data-aos="fade-up" 
        className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-4 pb-2"
      >
        Filip Nikolov
      </h1>
      
      <h2 
        data-aos="fade-up" 
        data-aos-delay="100" 
        className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 tracking-[0.25em] uppercase mb-8"
      >
        Software Engineer
      </h2>

      <p 
        data-aos="fade-up" 
        data-aos-delay="200"
        className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
      >
        Innovative and strategic Software Engineer specializing in modern frontend development. 
        Expert in <strong className="text-slate-200 font-medium">JavaScript (ES6+), TypeScript, and React.js</strong>. 
        I bridge the gap between complex backend logic and fluid, human-centric design to build impactful digital experiences.
      </p>

      <div 
        data-aos="fade-up" 
        data-aos-delay="300"
        className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mb-16"
      >
        <Link to={"/about"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 text-white text-sm font-semibold tracking-wide hover:bg-blue-500 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.5)] transition-all duration-300 border border-transparent">
            Get to know me
          </button>
        </Link>

        <Link to={"/projects"} className="w-full sm:w-auto">
          <button className="group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/50 backdrop-blur-md text-slate-300 text-sm font-semibold tracking-wide border border-slate-700/50 hover:bg-slate-800 hover:text-white hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            View Projects
            <i className="fa-solid fa-arrow-right text-xs opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
          </button>
        </Link>
      </div>

      <div 
        data-aos="fade-up" 
        data-aos-delay="400" 
        className="w-full max-w-2xl text-left"
      >
        <h3 className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 pl-1">Professional Experience</h3>
        <div className="space-y-3">
          <div className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 p-4 rounded-2xl transition-all duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-white font-semibold">Front-end Developer</h4>
                <p className="text-blue-400 text-sm">Rigilog</p>
              </div>
              <span className="text-xs text-slate-500 font-mono">2025 – Present</span>
            </div>
          </div>
          
          <div className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 p-4 rounded-2xl transition-all duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-white font-semibold">Software Engineer Intern</h4>
                <p className="text-blue-400 text-sm">Pabau</p>
              </div>
              <span className="text-xs text-slate-500 font-mono">2025 – 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;