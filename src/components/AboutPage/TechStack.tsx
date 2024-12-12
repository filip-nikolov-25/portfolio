const TechStack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-4">
      <div className="rounded-xl bg-gray-400 flex justify-center items-center p-10">
        <i className="fa-brands fa-html5 text-5xl text-white"></i>
      </div>
      <div className="rounded-xl bg-gray-400 flex justify-center items-center p-10">
        <i className="fa-brands fa-css3-alt text-5xl text-white"></i>
      </div>
      <div className="rounded-xl bg-gray-400 flex justify-center items-center p-10">
        <i className="fa-brands fa-sass text-5xl text-white"></i>
      </div>
      <div className="rounded-xl bg-gray-400 flex justify-center items-center p-10">
        <i className="fa-brands fa-git-alt text-5xl text-white"></i>
      </div>
      <div className="rounded-xl bg-gray-400 flex justify-center items-center p-10">
        <i className="fa-brands fa-js text-5xl text-white"></i>
      </div>
      <div className="rounded-xl bg-gray-400 flex justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/bootstrap-img-icon.png"
          className="w-8/12 rounded-xl"
          alt="Bootstrap icon"
        />
      </div>
      <div className="rounded-xl bg-gray-400 flex justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/tailwind-img-icon.png"
          className="w-10/12 rounded-xl"
          alt="Tailwind icon"
        />
      </div>
      <div className="rounded-xl bg-gray-400 flex justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/ts-icon.png"
          className="w-8/12 rounded-xl"
          alt="TypeScript icon"
        />
      </div>
      <div className="rounded-xl bg-gray-400 flex justify-center items-center p-10">
        <i className="fa-brands fa-react text-8xl text-blue-200"></i>
      </div>
      <div className="rounded-xl bg-gray-400 flex justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/next-icon-img.png"
          className="w-8/12 rounded-xl"
          alt="Next.js icon"
        />
      </div>
    </div>
  );
};

export default TechStack;
