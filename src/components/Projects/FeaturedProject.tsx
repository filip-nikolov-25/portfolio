import { useState } from "react";
import type { Project } from "./projectData";
import { BrowserChrome, CheckIcon, ExternalLinkIcon } from "./ProjectUI";
import ClocklyMock, { ClocklyHeroMock } from "./clockly/ClocklyMock";

const FeaturedProject = ({ project }: { project: Project }) => {
  const groups = project.featureGroups ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = groups[activeIndex];
  const totalFeatures = groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <article
      data-aos="fade-up"
      className="relative rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/10 pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row">
        <div className="relative flex flex-col bg-slate-950/50 overflow-hidden lg:w-1/2 border-b lg:border-b-0 lg:border-r border-white/5">
          <BrowserChrome />

          <div className="absolute top-1.5 right-4 z-20">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-blue-500/40 shadow-lg backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mt-0.5">
                Featured
              </span>
            </div>
          </div>

          <div className="relative w-full flex flex-1 items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.12),transparent_60%)] pointer-events-none" />
            <ClocklyHeroMock />
          </div>
        </div>

        <div className="flex flex-col relative z-20 lg:w-1/2 p-8 lg:p-10">
          <h3 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-2">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="text-blue-400 text-sm font-semibold tracking-wide mb-5">
              {project.subtitle}
            </p>
          )}

          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {project.highlights && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {project.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl bg-slate-950/40 border border-white/5 px-3 py-3 text-center"
                >
                  <div className="text-xl font-black text-white">{h.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 mt-1">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/live self-start inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-blue-500/90 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-500/20 transition-all"
            >
              Check Live
              <ExternalLinkIcon className="w-4 h-4 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
            </a>
          )}

          <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 bg-blue-500/5 border border-blue-500/10 text-blue-200/70 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {groups.length > 0 && (
        <div className="relative z-20 border-t border-white/5 p-6 lg:p-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
            <h4 className="text-lg font-bold text-white">Everything Clockly does</h4>
            <span className="text-[10px] uppercase tracking-[0.25em] text-blue-400/80 font-bold">
              {groups.length} modules · {totalFeatures} features
            </span>
          </div>

          <div
            role="tablist"
            aria-label="Clockly feature modules"
            className="flex sm:flex-wrap gap-2 mb-6 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0"
          >
            {groups.map((group, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={group.title}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-2 whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    isActive
                      ? "bg-blue-500/15 border-blue-500/40 text-white"
                      : "bg-slate-950/30 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10"
                  }`}
                >
                  <span>{group.title}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                      isActive ? "bg-blue-500/30 text-blue-100" : "bg-white/5 text-slate-500"
                    }`}
                  >
                    {group.items.length}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            key={activeGroup.title}
            className={`rounded-2xl bg-slate-950/40 border border-white/5 p-6 lg:p-8 grid gap-8 items-center ${
              activeGroup.mock ? "lg:grid-cols-[2fr_3fr]" : ""
            }`}
          >
            <div>
              <h5 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-5">
                {activeGroup.title}
              </h5>
              <ul
                className={`grid grid-cols-1 gap-x-6 gap-y-3 ${
                  activeGroup.mock ? "" : "md:grid-cols-2"
                }`}
              >
                {activeGroup.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-300/90"
                  >
                    <CheckIcon className="w-4 h-4 mt-0.5 text-blue-500/70 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {activeGroup.mock && (
              <div className="relative min-w-0">
                <div className="absolute -inset-4 bg-orange-500/5 blur-2xl rounded-full pointer-events-none" />
                <div className="relative">
                  <ClocklyMock mock={activeGroup.mock} />
                </div>
                <p className="relative mt-3 text-center text-[10px] uppercase tracking-widest text-slate-500">
                  Live mockup of the real Clockly UI
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default FeaturedProject;
