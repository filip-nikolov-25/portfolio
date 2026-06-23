import SpaceCanvas from "../SpaceCanvas";

const Projects = () => {
  const projectData = [
    {
      title: "Clockly - Employee Management & Time Tracking",
      link: "https://www.clockly.it.com/",
      imageFit: "contain", 
      images: ["/images/Clockly/Clockly-time.png"],
      tags: [
        "ReactJS",
        "TypeScript",
        "PostgreSQL",
        "Tailwind",
        "Node JS",
        "JWT Authentication",
        "Email Notifications",
      ],
      description:
        "Clockly is a modern full-stack employee management and time tracking platform designed to simplify HR workflows. Employees can log working hours, request leave, track availability, and receive notifications. Administrators can manage employees, approve requests, monitor work statistics, and control company workflows from a centralized dashboard.",
      features: [
        "Multi-company architecture",
        "Role-based permissions",
        "Weekly & monthly scheduling",
        "Leave request workflows",
        "Automated email notifications",
        "Work hour analytics dashboard",
      ],
    },
    {
      title: "SongBook - Chords for Guitar",
      images: ["/images/SongBook/SongBookSS.png"],
      tags: ["Next.js", "Firebase", "Tailwind"],
      description:
        "A modern platform for musicians to discover, save, and play songs with synchronized lyrics and guitar chords.",
      features: [
        "Inline chord display",
        "Secure authentication",
        "Firebase integration",
      ],
    },
    {
      title: "VibeOnEdu",
      images: ["/images/SparkasseSS/first.png"],
      tags: ["React", "FinTech", "Hackathon"],
      description:
        "A financial education platform created to make money management easier and more accessible for young people.",
      features: [
        "Interactive content",
        "Youth-focused UX",
        "FinTech inspired design",
      ],
    },
    {
      title: "Larger World",
      images: ["/images/LargerWorldSS/first.png"],
      tags: ["Front-end", "UX/UI", "Team Project"],
      description:
        "An inclusive sustainability platform focused on encouraging users to rethink habits and discover better environmental practices.",
      features: [
        "Horizontal scrolling",
        "Interactive navigation",
        "Sustainability focus",
      ],
    },
    {
      title: "MHRA",
      images: ["/images/MHRASS/first.png"],
      tags: ["Multi-language", "Event Management", "Web App"],
      description:
        "A web application built for the Macedonian HR Association, providing event management and a Multi-language experience.",
      features: [
        "Event management",
        "Multi-language support",
        "Blog management",
      ],
    },
    {
      title: "Safe Blink",
      images: ["/images/HomepageSafeBlink.png"],
      tags: ["Cybersecurity", "Education"],
      description:
        "An educational cybersecurity platform designed to improve online safety awareness through interactive content.",
      features: [
        "Reward engagement system",
        "Interactive lessons",
        "Video-based learning",
      ],
    },
    {
      title: "Cosmic Portfolio",
      images: ["/images/PortfolioSS.png"],
      tags: ["Canvas API", "TypeScript", "Animation"],
      description:
        "An immersive personal portfolio experience built with dynamic animations and HTML Canvas to create a unique interactive environment.",
      features: [
        "HTML Canvas animations",
        "Interactive cosmic VFX",
        "TypeScript architecture",
      ],
    },
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => {
            const isFeatured = index === 0;

            const CardWrapper = project.link ? "a" : "div";
            const wrapperProps = project.link
              ? {
                  href: project.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardWrapper
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                {...wrapperProps}
                className={`group relative flex flex-col rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 ${
                  isFeatured ? "lg:col-span-3 lg:flex-row" : "col-span-1"
                } ${project.link ? "cursor-pointer" : ""}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div
                  className={`relative flex flex-col bg-slate-950/50 overflow-hidden ${
                    isFeatured
                      ? "lg:w-1/2 lg:border-r border-white/5"
                      : "w-full border-b border-white/5"
                  }`}
                >
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-900/80 border-b border-white/5 backdrop-blur-sm z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>

                  {isFeatured && (
                    <div className="absolute top-14 left-4 z-20">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/40 shadow-lg backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mt-0.5">
                          Featured
                        </span>
                      </div>
                    </div>
                  )}

                  <div
                    className={`relative w-full flex items-center justify-center ${isFeatured ? "h-80 lg:h-full" : "h-56"} overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 opacity-60" />
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                        project.imageFit === "contain"
                          ? "object-contain p-4 lg:p-8"
                          : "object-cover object-top"
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`flex flex-col flex-1 relative z-20 ${
                    isFeatured ? "lg:w-1/2 p-8 lg:p-10" : "p-6"
                  }`}
                >
                  <h3
                    className={`font-bold relative flex items-center flex-wrap text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-3 ${
                      isFeatured ? "text-3xl lg:text-4xl" : "text-xl"
                    }`}
                  >
                    {project.title}

                    {project.link && (
                      <div className=" group/tooltip ml-3 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 -mt-1 text-blue-500/70 absolute left-[-10%] top-[-29%] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>

                        <div className="absolute top-[-40%] right-[-13%] -translate-x-1/2 mb-2 px-2.5 py-1 w-max bg-blue-500 text-white text-[9px] font-bold tracking-widest uppercase rounded shadow-xl opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-30">
                          Check Live
                          <svg
                            className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <polygon points="0,0 8,0 4,4" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {project.features && (
                    <div
                      className={`mb-6 ${isFeatured ? "grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3" : "space-y-2"}`}
                    >
                      {project.features
                        .slice(0, isFeatured ? 6 : 3)
                        .map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 text-xs text-slate-300/90 group/feature"
                          >
                            <svg
                              className="w-4 h-4 text-blue-500/60 shrink-0 transition-colors group-hover/feature:text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="mt-0.5">{feature}</span>
                          </div>
                        ))}
                      {!isFeatured && project.features.length > 3 && (
                        <div className="text-[10px] text-blue-400/70 italic pl-6 pt-1 font-medium">
                          + {project.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 bg-blue-500/5 border border-blue-500/10 text-blue-200/70 rounded-md transition-all group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
