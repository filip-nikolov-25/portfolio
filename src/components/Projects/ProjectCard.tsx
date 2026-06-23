interface ProjectCardType {
  title: string;
  images?: string[];
  description: string;
  bigTitle: boolean;
  features?: string[]; 
}

const ProjectCard = ({ title, images = [], description, bigTitle, features = [] }: ProjectCardType) => {
  return (
    <div className="p-6 h-full flex flex-col bg-slate-900/50 border border-white/5 rounded-2xl hover:border-white/10 transition-all duration-300">
      <div className={`mb-6 p-4 rounded-xl text-center font-bold bg-white/5 text-blue-300 ${bigTitle ? 'text-2xl' : 'text-xl'}`}>
        {title}
      </div>

      {images.length > 0 ? (
        <div className={`grid gap-4 ${images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={title}
              className="w-full h-40 object-cover border border-white/10 rounded-xl"
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-40 bg-slate-800/50 rounded-xl border border-white/5">
          <p className="text-sm tracking-widest text-slate-500 font-bold uppercase">Coming Soon</p>
        </div>
      )}

      <div className="mt-6 flex-grow">
        <p className="text-blue-400 font-bold text-lg mb-2">{title}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>

        {features.length > 0 && (
          <ul className="space-y-2 border-t border-white/5 pt-4">
            {features.map((feature, index) => (
              <li key={index} className="text-xs text-slate-300 flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;