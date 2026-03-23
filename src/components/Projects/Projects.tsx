import SpaceCanvas from "../SpaceCanvas";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      title: "SongBook - Chords for Guitar",
      images: ["/images/SongBook/SongBookSS.png"],
      tags: ["Next.js", "Firebase", "Tailwind"],
      description:
        "A musician's companion for finding and playing favorite songs with chords. Features inline chords, lyrics, and secure authentication.",
    },
    {
      title: "VibeOnEdu",
      images: ["/images/SparkasseSS/first.png"],
      tags: ["React", "FinTech", "Hackathon"],
      description: `The first platform in the country for youth financial education. Built interactive features to make financial literacy accessible.`,
    },
    {
      title: "Larger World",
      images: ["/images/LargerWorldSS/first.png"],
      tags: ["Front-end", "UX/UI", "Team Project"],
      description: `An inclusive platform focused on 'unlearning' for sustainability. Implemented smooth horizontal scrolling and modern navigation.`,
    },
    {
      title: "MHRA",
      images: ["/images/MHRASS/first.png"],
      tags: ["Multilingual", "Event Management"],
      description: `Web application for the Macedonian HR Association featuring event management, a blog, and a multilingual interface.`,
    },
    {
      title: "Safe Blink",
      images: ["/images/HomepageSafeBlink.png"],
      tags: ["Cybersecurity", "Education"],
      description: `A platform promoting safe browsing through educational videos and a badge-based engagement system.`,
    },
    {
      title: "Cosmic Portfolio",
      images: ["/images/PortfolioSS.png"],
      tags: ["Canvas API", "TypeScript"],
      description: `An immersive experience using HTML Canvas and dynamic animations to deliver a unique, interactive cosmic theme.`,
    },
  ];

  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-[#020617]">
      <SpaceCanvas />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <header className="mb-20 text-center" data-aos="fade-down">
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400 mb-4">
            Project Archives
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] w-12 bg-blue-500/50" />
            <p className="text-blue-300 tracking-[0.3em] uppercase text-xs font-bold">
              Mission Log: Completed Works
            </p>
            <div className="h-[1px] w-12 bg-blue-500/50" />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              
              <div className="relative pb-5 flex h-full flex-col bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                <ProjectCard
                  title={project.title}
                  images={project.images}
                  description={project.description}
                  bigTitle={index === 0}
                />
                
                <div className="px-6 pb-6 mt-5 flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-tighter px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;