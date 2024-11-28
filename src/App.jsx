import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom"; 
import ProjectsPage from "./pages/Projects";
import TeamPage from "./pages/Team";
import VideoGallary from "./pages/Portfolio/VideoGallary";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-red-500">
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:category/:projectName" element={<VideoGallary />} /> 
          
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
