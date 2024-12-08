import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from 'lucide-react';

const WebsiteCard = ({ website }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 aspect-video group cursor-pointer"
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
        src={website.image}
        alt={website.name}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-between p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <motion.h3 
                className="text-lg sm:text-xl font-bold text-white mb-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {website.name}
              </motion.h3>
              <motion.p 
                className="text-sm text-gray-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {website.category}
              </motion.p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <motion.a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 group text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="mr-2">Visit Website</span>
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: 5 }}
                  transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </motion.a>
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {website.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="inline-block bg-gray-700 text-white rounded-full px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isHovered && (
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{website.name}</h3>
          <p className="text-sm text-gray-300">{website.category}</p>
        </div>
      )}
    </motion.div>
  );
};

const WebDev = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const websites = [
    { 
      id: 1, 
      name: "SEPHORA PAKISTAN", 
      url: "https://sphora-app-project-mm.netlify.app", 
      category: "E-COMMERCE",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/Images/WebDev/13.png"
    },
 

    { 
      id: 2, 
      name: "UMERCH", 
      url: "https://urmerch.co.uk", 
      category: "E-COMMERCE",
      technologies: ["Shopify", "Liquid", "JavaScript"],
      image: "/Images/WebDev/19.png"
    },

    { 
      id: 3, 
      name: "WHOLESALERS ECOMMERCE MARKET PLACE", 
      url: "https://bulkbazaar.netlify.app", 
      category: "E-COMMERCE",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      image: "/Images/WebDev/11.png"
    },
    { 
      id: 4, 
      name: "FASHION TRENDS", 
      url: "https://stylofin.com", 
      category: "BUSINESS MANAGEMENT",
      technologies: ["WordPress", "PHP", "MySQL"],
      image: "/Images/WebDev/5.png"
    },
    { 
      id: 5, 
      name: "SMART LEARNING", 
      url: "https://gosmartlearning.ca", 
      category: "BUSINESS MANAGEMENT",
      technologies: ["Angular", "Node.js", "MongoDB"],
      image: "/Images/WebDev/7.png"
    },
    { 
      id: 6, 
      name: "TAX CONSULTANCY PORTFOLIO", 
      url: "https://taxshieldconsultancy.netlify.app", 
      category: "BUSINESS MANAGEMENT", 
      technologies: ["React", "Next.js", "Tailwind CSS"], 
      image: "/Images/WebDev/6.png"
    },
    { 
      id: 7, 
      name: "CUSTOMER RELATIONSHIP MANAGEMENT SYSTEM", 
      url: "https://avenue5-international.netlify.app", 
      category: "BUSINESS MANAGEMENT", 
      technologies: ["Vue.js", "Nuxt.js", "Bootstrap"], 
      image: "/Images/WebDev/17.JPG"
    },
    { 
      id: 8, 
      name: "TRAVELING AGENCY PORTFOLIO", 
      url: "https://traveloguers.com", 
      category: "BUSINESS MANAGEMENT", 
      technologies: ["WordPress", "PHP", "MySQL"], 
      image: "/Images/WebDev/8.png"
    },
    { 
      id: 9, 
      name: "REAL ESTATE COMPANY PORTFOLIO", 
      url: "https://avenue5international.com", 
      category: "BUSINESS MANAGEMENT", 
      technologies: ["React", "Next.js", "Material UI"], 
      image: "/Images/WebDev/9.png" 
    },
    
    { 
      id: 10, 
      name: "SPORTS SCORE", 
      url: "https://kingdom-sport.web.app", 
      category: "BUSINESS MANAGEMENT", 
      technologies: ["Angular", "Firebase", "Angular Material"], 
      image: "/Images/WebDev/10.png"
    },
    { 
      id: 11, 
      name: "REAL STATE COMPANY PORTFOLIO", 
      url: "https://avenue5central.com", 
      category: "BUSINESS MANAGEMENT", 
      technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS"], 
      image: "/Images/WebDev/4.png"
    },
    { 
      id: 12, 
      name: "SOLAR ENERGY, CLEAN ENERGY", 
      url: "https://elitesolutions.pk", 
      category: "BUSINESS MANAGEMENT", 
      technologies: ["WordPress", "PHP", "Elementor"], 
      image: "/Images/WebDev/3.png"
    },
    { 
      id: 13, 
      name: "PROFESSIONAL BUSINESS SETUP", 
      url: "https://housemasters.ae", 
      category: "CUSTOMER SERVICE", 
      technologies: ["React", "Next.js", "Stripe"], 
      image: "/Images/WebDev/2.png"
    },
    { 
      id: 14, 
      name: "TRUSTED EXPERTS IN SECURITY", 
      url: "https://gdgsecurity.com", 
      category: "CUSTOMER SERVICE", 
      technologies: ["Vue.js", "Laravel", "Tailwind CSS"], 
      image: "/Images/WebDev/1.png"
    },
  ];

  const categories = Array.from(new Set(websites.map(website => website.category)));

  const filteredWebsites = selectedCategory
    ? websites.filter(website => website.category === selectedCategory)
    : websites;

  return (
    <section className="min-h-screen bg-black py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-32">
      <header className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Website Showcase
        </h1>
      </header>

      <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-3 sm:gap-4 px-4">
        <motion.button
          onClick={() => setSelectedCategory(null)}
          className={`text-sm sm:text-base font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 ${
            selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </motion.button>
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-sm sm:text-base font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredWebsites.map((website) => (
            <WebsiteCard key={website.id} website={website} />
          ))}
        </motion.div>
      </AnimatePresence>

      <footer className="mt-12 sm:mt-16 text-center px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Get in Touch</h2>
        <p className="mb-4 text-gray-300">Interested in working together? Let's connect!</p>
        <motion.a
          href="mailto:contact@example.com"
          className="inline-block text-sm sm:text-base px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </footer>
    </section>
  );
};

export default WebDev;

