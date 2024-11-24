import { motion } from "framer-motion";
import { FaArrowTrendUp, FaGlobe } from "react-icons/fa6";
import { SiShopify, SiSimpleanalytics } from "react-icons/si";
import { SlEnergy } from "react-icons/sl";

const FeatureCard = ({ title, description, icon }) => (
  <div className="p-6 rounded-xl bg-[#1a1d2352] border border-white/10">
    <motion.div
      whileHover={{ scale: 1.06 }} 
      transition={{ duration: 0.3 }} 
      className="rounded-lg w-max p-2 mb-6 border bg-gray-100 flex justify-center items-center"
    >
      {icon}
    </motion.div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "Social Media Marketing",
      description: "Supercharge your social media presence with our expert strategies.",
      icon: <SlEnergy size={20} color="black" />,
    },
    {
      title: "SEO Optimization",
      description: "Boost your search engine rankings and drive organic traffic to your website.",
      icon: <FaArrowTrendUp size={20} color="black" />,
    },
    {
      title: "Data Analytics",
      description: "Make informed decisions with our advanced data analysis and reporting tools.",
      icon: <SiSimpleanalytics size={20} color="black" />,
    },
    {
      title: "Web Development",
      description: "Create a stunning website that converts visitors into customers.",
      icon: <FaGlobe size={20} color="black" />,
    },

    {
      title: "Shopify",
      description: "Get your Shopify store up and running with our expert development services.",
      icon: <SiShopify size={20} color="black" />,
    },

    {
      title: "E-Commerce",
      description: "Launch and grow your online store with our powerful e-commerce solutions.",
      icon: <FaArrowTrendUp size={20} color="black" />,
    },

  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            We provide
            <br />
            <span className="text-gray-400">the best</span>
          </h2>
          <div className="flex justify-center gap-2 mt-3">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
