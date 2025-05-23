
import Canvas from "../components/HomePage/Canvas";
import MainSection from "../components/HomePage/MainSection";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Canvas />
      <div className="absolute inset-0 flex flex-col items-center justify-start mt-24 z-10">
        <MainSection />
      </div>
    </div>
  );
};

export default HomePage;
