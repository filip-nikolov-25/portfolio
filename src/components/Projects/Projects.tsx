import SpaceCanvas from "../SpaceCanvas";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import { featuredProject, projects } from "./projectData";

const SectionLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-blue-400 tracking-[0.3em] uppercase text-xs font-bold whitespace-nowrap">
      {children}
    </span>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/40 to-transparent" />
  </div>
);

const Projects = () => {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-[#020617] text-slate-300">
      <SpaceCanvas />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <header className="mb-20 text-center" data-aos="fade-down">
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-500 mb-6 pb-2">
            Project Archives
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-blue-500/50" />
            <p className="text-blue-400 tracking-[0.3em] uppercase text-xs font-bold">
              Featured projects and personal work
            </p>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>
        </header>

        <div className="mb-24">
          <SectionLabel>Featured Project</SectionLabel>
          <FeaturedProject project={featuredProject} />
        </div>

        <div>
          <SectionLabel>More Projects</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
