import Canvas from "../components/HomePage/Canvas";
import MainSection from "../components/HomePage/MainSection";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 z-0">
        <Canvas />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617]/80 z-10 pointer-events-none" />

   
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
        <MainSection />
      </div>
    </div>
  );
};

export default HomePage;