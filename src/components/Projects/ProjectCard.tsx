import type { Project } from "./projectData";
import { BrowserChrome, CheckIcon, ExternalLinkIcon } from "./ProjectUI";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const CardWrapper = project.link ? "a" : "div";
  const wrapperProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
      {...wrapperProps}
      className={`group relative flex flex-col rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 ${
        project.link ? "cursor-pointer" : ""
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative flex flex-col bg-slate-950/50 overflow-hidden w-full border-b border-white/5">
        <BrowserChrome />
        <div className="relative w-full flex items-center justify-center h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 opacity-60" />
          <img
            src={project.images[0]}
            alt={project.title}
            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
              project.imageFit === "contain"
                ? "object-contain p-4"
                : "object-cover object-top"
            }`}
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 relative z-20 p-6">
        <h3 className="text-xl font-bold flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-3">
          {project.title}
          {project.link && (
            <ExternalLinkIcon className="w-4 h-4 text-blue-500/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-400" />
          )}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {project.features.length > 0 && (
          <ul className="mb-6 space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-xs text-slate-300/90 group/feature"
              >
                <CheckIcon className="w-4 h-4 text-blue-500/60 shrink-0 transition-colors group-hover/feature:text-blue-400" />
                <span className="mt-0.5">{feature}</span>
              </li>
            ))}
          </ul>
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
};

export default ProjectCard;
