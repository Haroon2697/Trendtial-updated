import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom"; 
import ProjectsPage from "./pages/Projects/ProjectsPage";
import TeamPage from "./pages/Team";
import VideoGallary from "./pages/Portfolio/VideoGallary";

import Footer from "./components/Footer";
;
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
<>
    <ScrollToTop />
    <div className="min-h-screen bg-red-500">
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Tech */}
        
          
          {/* Marketing */}

          <Route path="/projects/:category/:videoeditingproduction" element={<VideoGallary />} /> 
       

          {/* Shopify */}


      
          
      </Routes>
      <Footer />

    
    </div>

    </>
  );
}

export default App;
