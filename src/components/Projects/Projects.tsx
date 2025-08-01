import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      title: "SongBook - Chords for Guitar",
      images: ["/images/SongBook/SongBookSS.png"],
      description:
        "Songbook is a web application made for musicians to easily find, filter, and play their favorite songs with chords. Whether you're practicing solo or jamming with friends, Songbook provides a clean and organized interface to keep your favorite tunes just a click away. Features include searching and filtering songs by name or genre, displaying chords inline with lyrics, and a mobile-friendly responsive design. Built with Next.js and Firebase, it offers fast and secure authentication. Tech stack: Frontend with Next.js, TypeScript, Tailwind CSS  Backend and database with Firebase Firestore, Auth, and Realtime Database ",
    },
    {
      title: "VibeOnEdu",
      images: [
        "/images/SparkasseSS/first.png",
        "/images/SparkasseSS/second.png",
        "/images/SparkasseSS/third.png",
        "/images/SparkasseSS/fourth.png",
        "/images/SparkasseSS/fifth.png",
      ],
      description: `Developed during a hackathon, VibeOnEdu is the first platform in the country for financial education for young people. My team implemented user registration, login, and interactive features to make financial literacy accessible.`,
    },
    {
      title: "Larger World",
      images: [
        "/images/LargerWorldSS/first.png",
        "/images/LargerWorldSS/second.png",
        "/images/LargerWorldSS/third.png",
        "/images/LargerWorldSS/fourth.png",
      ],
      description: `As part of a team, I helped develop the Larger World platform, introducing users to "unlearning" for a sustainable and inclusive world. I worked on front-end features like horizontal scrolling and smooth navigation while aligning with the platform's vision.`,
    },
    {
      title: "MHRA",
      images: [
        "/images/MHRASS/first.png",
        "/images/MHRASS/second.png",
        "/images/MHRASS/third.png",
        "/images/MHRASS/fourth.png",
      ],
      description: `I contributed to the Macedonian Human Resources Association web application, featuring event management, a multilingual interface, an HR blog etc. The platform provides resources and updates for the HR community.`,
    },
    {
      title: "Safe Blink",
      images: ["/images/HomepageSafeBlink.png"],
      description: `Safe Blink is a web application I developed to promote safe browsing practices. Users can learn about online safety through discussions and educational videos. Features include user authentication, commenting, and a badge system to encourage engagement.`,
    },
    {
      title: "Portfolio",
      images: ["/images/PortfolioSS.png"],
      description: `I created an immersive space-like effect using HTML Canvas with dynamic animations, enhancing the portfolio with a cosmic theme. The design responds fluidly to user interactions and resizing, delivering a unique experience.`,
    },
  ];

  return (
    <div className="bg-gradient-to-l pt-16 mt-[-62px] from-purple-900 to-blue-950">
      <div className="mx-auto w-[80%]">
        <h2 className="text-5xl pt-10 pb-10 text-blue-200 text-center">
          Project's Overview
        </h2>
        <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              images={project.images}
              description={project.description}
              bigTitle={true && index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
