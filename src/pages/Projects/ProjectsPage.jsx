import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import projectsData from './projectsData';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 aspect-[4/3] group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        src={project.image}
        alt={project.name}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-30"
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -60 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-white mb-2">{project.name}</h3>
        <motion.p
          className="text-white text-sm sm:text-base"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.description}
        </motion.p>
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-end items-start p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to={`/projects/${project.category}/${project.name}`}
              className="inline-flex items-center bg-blue-600 text-white px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 group"
            >
              <span className="mr-2">Learn More</span>
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: 5 }}
                transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("marketing");

  const filteredProjects = projectsData.filter(project => project.category === activeTab);

  return (
    <section className="min-h-screen bg-black text-white pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-36 md:pb-52">
      <div className="container mx-auto px-4 md:px-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 md:mb-16 space-x-2 sm:space-x-4 md:space-x-8">
          {["tech", "marketing", "shopify"].map((tab) => (
            <motion.button
              key={tab}
              className={`text-sm sm:text-base md:text-xl font-semibold px-3 py-2 sm:px-4 sm:py-3 md:px-8 md:py-4 rounded-lg mb-2 sm:mb-0 ${
                activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300"
              } transition-all duration-300`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;

