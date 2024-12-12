interface ProjectCardType {
  title: string;
  images?: string[]; 
  description: string;
}

const ProjectCard = ({ title, images = [], description }: ProjectCardType) => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <div className="p-5 rounded-xl mb-5 text-3xl text-center animate-pulse text-purple-900 font-bold bg-gray-400">
        {title}
      </div>
      {images.length === 1 ? (
        <img
          src={images[0]}
          alt=""
          className="w-full border-4 border-purple-500 rounded-3xl"
        />
      ) : images.length > 1 ? (
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="w-full border-4 border-purple-500 rounded-3xl"
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center bg-purple-950 opacity-35 backdrop-blur-3xl rounded-lg p-4">
          <p className="text-3xl text-white">COMING SOON</p>
        </div>
      )}
      <div className="mt-4">
        <p className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue-900 via-green-500 to-purple-900">
          {title}
        </p>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
