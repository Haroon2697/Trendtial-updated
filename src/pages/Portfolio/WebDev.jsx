import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WebDev = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const websites = [
    { 
      id: 1, 
      name: "SEPHORA PAKISTAN", 
      url: "https://sphora-app-project-mm.netlify.app", 
      category: "E-COMMERCE",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=300&width=400&text=SEPHORA"
    },
    { 
      id: 2, 
      name: "WHOLESALERS ECOMMERCE MARKET PLACE", 
      url: "https://bulkbazaar.netlify.app", 
      category: "E-COMMERCE",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      image: "/placeholder.svg?height=300&width=400&text=WHOLESALERS"
    },
    { 
      id: 3, 
      name: "XPERTFIRST", 
      url: "https://xpert-first-app.netlify.app", 
      category: "E-COMMERCE",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image: "/placeholder.svg?height=300&width=400&text=XPERTFIRST"
    },
    { 
      id: 4, 
      name: "UMERCH", 
      url: "https://urmerch.co.uk", 
      category: "E-COMMERCE",
      technologies: ["Shopify", "Liquid", "JavaScript"],
      image: "/placeholder.svg?height=300&width=400&text=UMERCH"
    },
    { 
      id: 5, 
      name: "FASHION TRENDS", 
      url: "https://stylofin.com", 
      category: "BUSINESS MANAGEMENT",
      technologies: ["WordPress", "PHP", "MySQL"],
      image: "/placeholder.svg?height=300&width=400&text=FASHION+TRENDS"
    },
    { 
      id: 6, 
      name: "SMART LEARNING", 
      url: "https://gosmartlearning.ca", 
      category: "BUSINESS MANAGEMENT",
      technologies: ["Angular", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=300&width=400&text=SMART+LEARNING"
    },
    { id: 7, name: "TAX CONSULTANCY PORTFOLIO", url: "https://taxshieldconsultancy.netlify.app", category: "BUSINESS MANAGEMENT", technologies: ["React", "Next.js", "Tailwind CSS"], image: "/placeholder.svg?height=300&width=400&text=TAX+CONSULTANCY" },
    { id: 8, name: "CUSTOMER RELATIONSHIP MANAGEMENT SYSTEM", url: "https://avenue5-international.netlify.app", category: "BUSINESS MANAGEMENT", technologies: ["Vue.js", "Nuxt.js", "Bootstrap"], image: "/placeholder.svg?height=300&width=400&text=CRM+SYSTEM" },
    { id: 9, name: "TRAVELING AGENCY PORTFOLIO", url: "https://traveloguers.com", category: "BUSINESS MANAGEMENT", technologies: ["WordPress", "PHP", "MySQL"], image: "/placeholder.svg?height=300&width=400&text=TRAVEL+AGENCY" },
    { id: 10, name: "REAL ESTATE COMPANY PORTFOLIO", url: "https://avenue5international.com", category: "BUSINESS MANAGEMENT", technologies: ["React", "Next.js", "Material UI"], image: "/placeholder.svg?height=300&width=400&text=REAL+ESTATE" },
    { id: 11, name: "SPORTS SCORE", url: "https://kingdom-sport.web.app", category: "BUSINESS MANAGEMENT", technologies: ["Angular", "Firebase", "Angular Material"], image: "/placeholder.svg?height=300&width=400&text=SPORTS+SCORE" },
    { id: 12, name: "REAL STATE COMPANY PORTFOLIO", url: "https://avenue5central.com", category: "BUSINESS MANAGEMENT", technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS"], image: "/placeholder.svg?height=300&width=400&text=REAL+STATE" },
    { id: 13, name: "SOLAR ENERGY, CLEAN ENERGY", url: "https://elitesolutions.pk", category: "BUSINESS MANAGEMENT", technologies: ["WordPress", "PHP", "Elementor"], image: "/placeholder.svg?height=300&width=400&text=SOLAR+ENERGY" },
    { id: 14, name: "PROFESSIONAL BUSINESS SETUP", url: "https://housemasters.ae", category: "CUSTOMER SERVICE", technologies: ["React", "Next.js", "Stripe"], image: "/placeholder.svg?height=300&width=400&text=BUSINESS+SETUP" },
    { id: 15, name: "TRUSTED EXPERTS IN SECURITY", url: "https://gdgsecurity.com", category: "CUSTOMER SERVICE", technologies: ["Vue.js", "Laravel", "Tailwind CSS"], image: "/placeholder.svg?height=300&width=400&text=SECURITY" },
  ];

  const categories = Array.from(new Set(websites.map(website => website.category)));

  const filteredWebsites = selectedCategory
    ? websites.filter(website => website.category === selectedCategory)
    : websites;

  return (
    <div className="min-h-screen bg-white py-24 px-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-black text-center">
          Website Showcase
        </h1>
      </header>

      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full ${selectedCategory === null ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'}`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-red-600 text-white' : 'bg-gray-200 text-black'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredWebsites.map((website, index) => (
            <motion.div
              key={website.id}
              className="relative overflow-hidden rounded-lg shadow-lg bg-white h-64"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(website.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={website.image} 
                alt={website.name} 
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === website.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold mb-2 text-white text-center">{website.name}</h2>
                <p className="text-sm text-gray-300 mb-2">{website.category}</p>
                <div className="mb-4">
                  {website.technologies.map((tech, i) => (
                    <span key={i} className="inline-block bg-red-600 text-white rounded-full px-2 py-1 text-xs mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full text-sm hover:bg-red-700 transition-colors duration-300"
                >
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <footer className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">Get in Touch</h2>
        <p className="mb-4 text-black">Interested in working together? Let's connect!</p>
        <a
          href="mailto:contact@example.com"
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300"
        >
          Contact Me
        </a>
      </footer>
    </div>
  );
};

export default WebDev;

