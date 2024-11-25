import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const projectsData = {
  tech: [
    {
      name: "Web Development Process",
      image:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjQ1N3wwfDF8c2VhcmNofDN8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fHx8fDE2ODU4Nzg4NDc&ixlib=rb-1.2.1&q=80&w=1080",
      demo: "https://web-development-demo.com",
      description:
        "Our web development journey starts with understanding your vision. We begin by brainstorming ideas to design interfaces that are both visually appealing and user-friendly. Our development phase involves writing clean, maintainable code, followed by rigorous testing to ensure a smooth user experience. Finally, we deploy the project to a scalable hosting platform, ensuring fast performance and security.",
    },
    {
      name: "Tech & Design Innovations",
      image:
        "https://images.unsplash.com/photo-1580894732444-244b1f2f3a6e?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjQ1N3wwfDF8c2VhcmNofDV8fHRlY2glMjBpbm5vdmF0aW9ufGVufDB8fHx8fDE2ODU4Nzg4NjE&ixlib=rb-1.2.1&q=80&w=1080",
      demo: "https://tech-and-design-demo.com",
      description:
        "By combining cutting-edge technology with creative design, we deliver solutions that stand out. Our process focuses on responsive design, intuitive interfaces, and advanced features like AI-powered functionalities and cloud integrations. From concept to final implementation, we ensure that your product embodies innovation and usability.",
    },
  ],
  marketing: [
    {
      name: "Digital Marketing Strategies",
      image:
        "https://images.unsplash.com/photo-1559028012-df374ac84174?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjQ1N3wwfDF8c2VhcmNofDE1fHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8fDE2ODU4Nzg5MDk&ixlib=rb-1.2.1&q=80&w=1080",
      demo: "https://digital-marketing-strategies.com",
      description:
        "Our digital marketing approach is data-driven and result-oriented. We start by analyzing market trends and audience behavior. Through targeted ad campaigns, social media strategies, and influencer collaborations, we enhance brand visibility. Our expertise in email marketing, PPC, and Google Ads ensures high ROI for our clients.",
    },
    {
      name: "Content Writing & SEO Optimization",
      image:
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjQ1N3wwfDF8c2VhcmNofDV8fGNvbnRlbnQlMjB3cml0aW5nJTIwU0VPfGVufDB8fHx8fDE2ODU4Nzg5MjU&ixlib=rb-1.2.1&q=80&w=1080",
      demo: "https://content-seo-demo.com",
      description:
        "We craft content that informs, engages, and converts. Our SEO strategies include keyword research, on-page optimization, and backlink building to improve your website's search engine ranking. By combining high-quality content with effective SEO techniques, we help businesses drive organic traffic and generate leads.",
    },
  ],
  shopify: [
    {
      name: "Shopify Product Research",
      image:
        "https://images.unsplash.com/photo-1560853651-dfbd04e778b2?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjQ1N3wwfDF8c2VhcmNofDh8fHNob3BpZnklMjBwcm9kdWN0fGVufDB8fHx8fDE2ODU4Nzg5NTE&ixlib=rb-1.2.1&q=80&w=1080",
      demo: "https://shopify-product-research.com",
      description:
        "Product research is the cornerstone of Shopify success. Our team hunts for trending and high-demand products by analyzing market data and consumer behavior. We identify niche products with high profit margins, ensuring that your store stands out and appeals to its target audience.",
    },
    {
      name: "Shopify Custom Storefronts",
      image:
        "https://images.unsplash.com/photo-1517059224940-d4af9eec41ec?crop=entropy&cs=tinysrgb&fit=max&ixid=M3wzNjQ1N3wwfDF8c2VhcmNofDd8fHNob3BpZnklMjBjdXN0b20lMjBzdG9yZXxlbnwwfHx8fDE2ODU4Nzg5NzM&ixlib=rb-1.2.1&q=80&w=1080",
      demo: "https://shopify-custom-stores.com",
      description:
        "Our Shopify services include creating bespoke storefronts tailored to your brand identity. We focus on designing intuitive navigation, visually appealing layouts, and optimized checkout processes to enhance user experience and boost conversions.",
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
        onError={(e) => {
          console.error("Failed to load image:", e.target.src);
          e.target.src =
            "https://via.placeholder.com/300"; // Fallback image for errors
        }}
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
                  <LazyImage
                    alt={project.name}
                    className={"w-full rounded-lg shadow-lg"}
                    src={project.image}
                  />
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
