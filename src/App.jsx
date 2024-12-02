import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom"; 
import ProjectsPage from "./pages/Projects";
import TeamPage from "./pages/Team";
import VideoGallary from "./pages/Portfolio/VideoGallary";
import SEO from "./pages/Portfolio/SEO";
import WebDev from "./pages/Portfolio/WebDev";
import Footer from "./components/Footer";
import Message from "./pages/Portfolio/message";
import SocialMediaMarketing from "./pages/Portfolio/SocialMediaMarketing";
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
          <Route path="/projects/:category/:Web Development Process" element={<WebDev />} />
          
          {/* Marketing */}

          <Route path="/projects/:category/:Video Editing & Production" element={<VideoGallary />} /> 
          <Route path="/projects/:category/:Content Writing & SEO Optimization" element={<SEO />} />
          <Route path="/projects/:category/:Social Media Marketing" element={<SocialMediaMarketing />} />

          
          <Route path="/projects/:category/:ProjectName" element={<Message />} />

          {/* Shopify */}


          <Route path="*" element={<h1>Not Found</h1>} />
          
      </Routes>
      <Footer />

    
    </div>

    </>
  );
}

export default App;
