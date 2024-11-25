import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const projectsData = {
  tech: [
    {
      name: "AI-powered App",
      image:
        "https://cdn.prod.website-files.com/644911ba57947a8c25ad6be7/64d9f764a58c786881467555_fitness-mobile%20app.png",
      demo: "https://ai-powered-app-demo.com",
      description:
        "An innovative app leveraging artificial intelligence to automate tasks, enhance decision-making, and drive productivity.",
    },
    {
      name: "Blockchain Platform",
      image:
        "https://www.almondsolutions.com/images/blog-ui-ux-150223.jpg",
      demo: "https://blockchain-platform-demo.com",
      description:
        "A robust blockchain platform enabling secure transactions and supporting decentralized applications.",
    },
  ],
  marketing: [
    {
      name: "Social Media Campaign",
      image:
        "https://cdn.uistore.design/assets/images/yolk-free-ios-ui-kit-design-system-for-sketch-thumb.webp",
      demo: "https://social-media-campaign-demo.com",
      description:
        "A dynamic social media campaign that achieved a 300% increase in engagement and expanded brand reach.",
    },
    {
      name: "Content Strategy",
      image:
        "https://assets.justinmind.com/wp-content/uploads/2019/10/list-ui-design-daily-planner.png",
      demo: "https://content-strategy-demo.com",
      description:
        "A data-driven content strategy crafted to attract, engage, and convert audiences effectively.",
    },
  ],
  shopify: [
    {
      name: "E-commerce Store",
      image:
        "https://www.shutterstock.com/image-vector/technology-user-interface-ui-infographics-260nw-1652745280.jpg",
      demo: "https://ecommerce-store-demo.com",
      description:
        "A visually stunning and fully responsive Shopify store designed for a seamless online shopping experience.",
    },
    {
      name: "Custom Shopify Theme",
      image:
        "https://800c8044-cdn.agilitycms.cloud/Attachments/NewItems/How-to-Choose-the-Right-UI-Partner_20210730200121_0.jpg",
      demo: "https://custom-shopify-theme-demo.com",
      description:
        "A bespoke Shopify theme tailored to reflect brand identity while optimizing user engagement and conversions.",
    },
  ],



};

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundColor: isLoaded ? "transparent" : "black",
        height: "100%",
      }}
    >
      {/* Placeholder/Black Box */}
      {!isLoaded && <div className="absolute top-0 left-0 w-full h-full"></div>}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        onLoad={() => setIsLoaded(true)}
        onError={() => console.error("Failed to load image")}
      />
    </div>
  );
};




const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("tech");

  return (
    <section className="min-h-screen bg-black text-white pt-36 pb-52">
      <div className="container mx-auto px-24">
        {/* Tabs */}
        <div className="flex justify-center mb-28">
          {["tech", "marketing", "shopify"].map((tab) => (
            <button
              key={tab}
              className={`text-xl font-semibold px-6 py-3 mx-2 rounded-lg ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-[#63636352]"
              } transition`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projectsData[activeTab].map((project, index) => {
            const { ref, inView } = useInView({ triggerOnce: true });
            return (
              <div
                ref={ref}
                key={project.name}
                className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } opacity-0 transform transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "translate-y-20"
                }`}
              >
                {/* Image */}
                <div
                  className="w-full md:w-1/2 relative"
                  style={{
                    transform: inView ? "rotate(-3deg)" : "rotate(0deg)",
                    transition: "transform 0.7s ease-out",
                  }}
                >
                  <LazyImage alt={project.name} className={"w-full rounded-lg shadow-lg"} src={project.image}/>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-4xl font-extrabold mb-4">{project.name}</h2>
                  <p className="text-gray-300 mb-4 w-[80%]">{project.description}</p>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-lg font-medium"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
