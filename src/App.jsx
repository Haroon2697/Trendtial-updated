import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import TeamPage from "./pages/Team";
import ProjectsPage from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-red-500">
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/team" element={<TeamPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
