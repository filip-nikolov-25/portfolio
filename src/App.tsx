import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SideBar from "./components/SideBar";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="mt-[-70px] relative w-full h-screen">
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes
        <Footer />
      </div>
    </Router>
  );
}

export default App;
