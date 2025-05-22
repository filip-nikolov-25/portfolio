const TechStack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-4">
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <i className="fa-brands fa-html5 text-5xl text-white"></i>
        <span className="mt-4 text-white text-lg font-medium">HTML5</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <i className="fa-brands fa-css3-alt text-5xl text-white"></i>
        <span className="mt-4 text-white text-lg font-medium">CSS3</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <i className="fa-brands fa-sass text-5xl text-white"></i>
        <span className="mt-4 text-white text-lg font-medium">Sass</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <i className="fa-brands fa-git-alt text-5xl text-white"></i>
        <span className="mt-4 text-white text-lg font-medium">Git</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <i className="fa-brands fa-js text-5xl text-white"></i>
        <span className="mt-4 text-white text-lg font-medium">JavaScript</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/bootstrap-img-icon.png"
          className="w-8/12 rounded-xl"
          alt="Bootstrap icon"
        />
        <span className="mt-4 text-white text-lg font-medium">Bootstrap</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/tailwind-img-icon.png"
          className="w-8/12 rounded-xl"
          alt="Tailwind icon"
        />
        <span className="mt-4 text-white text-lg font-medium">Tailwind CSS</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/ts-icon.png"
          className="w-8/12 rounded-xl"
          alt="TypeScript icon"
        />
        <span className="mt-4 text-white text-lg font-medium">TypeScript</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <i className="fa-brands fa-react text-8xl text-blue-200"></i>
        <span className="mt-4 text-white text-lg font-medium">React</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/next-icon-img.png"
          className="w-8/12 rounded-xl"
          alt="Next.js icon"
        />
        <span className="mt-4 text-white text-lg font-medium">Next.js</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/graphql-img-icon.png"
          className="w-full rounded-xl"
          alt="GraphQL icon"
        />
        <span className="mt-4 text-white text-lg font-medium">GraphQL</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/jest-img-icon.png"
          className="w-8/12 rounded-xl"
          alt="Jest icon"
        />
        <span className="mt-4 text-white text-lg font-medium">Jest</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/postgresql-img-icon.png"
          className="w-8/12 rounded-xl"
          alt="PostgreSQL icon"
        />
        <span className="mt-4 text-white text-lg font-medium">PostgreSQL</span>
      </div>
      <div className="rounded-xl bg-gray-400 flex flex-col justify-center items-center p-10">
        <img
          src="/images/TechStackIcons/nodejs-img-icon.png"
          className="w-8/12 rounded-xl"
          alt="Node.js icon"
        />
        <span className="mt-4 text-white text-lg font-medium">Node.js</span>
      </div>
    </div>
  );
};

export default TechStack;
