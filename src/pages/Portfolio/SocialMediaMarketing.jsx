import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Utensils,  Luggage, Heart, Sun ,Dumbbell  } from "lucide-react";

const categories = [
  { 
    title: "Real Estate",
    icon: Home,
    images:
     [
        "/Images/SocialMedia/MedicalSpa/image0.webp", 
        "/Images/SocialMedia/MedicalSpa/image01.webp",
        "/Images/SocialMedia/MedicalSpa/image02.webp",
        "/Images/SocialMedia/MedicalSpa/image03.webp",
        "/Images/SocialMedia/MedicalSpa/image05.webp",

     ] 

},
  { 
    title: 
    "Restaurants", 
    icon: Utensils, 
    images: 
    [
        "/Images/SocialMedia/Resturant/image01.webp",
        "/Images/SocialMedia/Resturant/image02.webp",
        "/Images/SocialMedia/Resturant/image03.webp",
        "/Images/SocialMedia/Resturant/image04.webp",
        "/Images/SocialMedia/Resturant/image05.jpeg",
        "/Images/SocialMedia/Resturant/image06.jpeg",
    ]
 },

  { 
    title: "SkinCare", 
    icon: Heart, 
    images: 
    [
        "/Images/SocialMedia/SkinCare/image01.jpeg",
        "/Images/SocialMedia/SkinCare/image02.jpeg",
        "/Images/SocialMedia/SkinCare/image03.jpeg",
        "/Images/SocialMedia/SkinCare/image04.jpeg",
        "/Images/SocialMedia/SkinCare/image05.jpeg",
    
    ]
 },

 { 
    title: "Solar Company", 
    icon: Sun, 
    images: 
    [
        "/Images/SocialMedia/SolarCompany/image01.webp",
        "/Images/SocialMedia/SolarCompany/image02.webp",
        "/Images/SocialMedia/SolarCompany/image03.webp",
        "/Images/SocialMedia/SolarCompany/image04.webp",
        "/Images/SocialMedia/SolarCompany/image05.webp",
   
    ]
},

 { 
    title: "Travel and Tours", 
    icon: Luggage,     
    
    images: 
    [
        "/Images/SocialMedia/Travelandtour/image01.jpeg",
        "/Images/SocialMedia/Travelandtour/image02.jpeg",
        "/Images/SocialMedia/Travelandtour/image03.jpeg",
        "/Images/SocialMedia/Travelandtour/image04.jpeg",

    ]
 },

 { 
    title: "Sports and Fitness", 
    icon: Dumbbell,     
    
    images: 
    [
        "/Images/SocialMedia/Travelandtour/image01.jpeg",
        "/Images/SocialMedia/Travelandtour/image02.jpeg",
        "/Images/SocialMedia/Travelandtour/image03.jpeg",
        "/Images/SocialMedia/Travelandtour/image04.jpeg",

    ]
 },
 


];

const CategoryCard = ({ title, icon: Icon, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-2 p-6 bg-white rounded-full shadow-lg cursor-pointer w-32 h-32 transition-transform hover:bg-red-50"
    >
      <div className="flex items-center justify-center w-12 h-12">
        <Icon className="text-red-600 w-full h-full" />
      </div>
      <span className="text-sm font-medium text-center text-black">{title}</span>
    </motion.div>
  );
  

const ImageGallery = ({ title, images }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto"
  >
    <div className="container  mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-xl text-red-600">Explore our {title.toLowerCase()} services</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <img
              src={image}
              alt={`${title} image ${index + 1}`}
              className="object-cover hover:scale-110 transition-transform duration-300 w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const SocialMediaMarketing = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section className="min-h-screen bg-[#faf7f5] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mt-16 mb-4 text-red-600">Our Services</h1>
          <p className="text-xl text-black">Explore our wide range of professional services</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <CategoryCard {...category} onClick={() => setSelectedCategory(category)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCategory && <ImageGallery title={selectedCategory.title} images={selectedCategory.images} />}
      </AnimatePresence>

      {selectedCategory && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full z-50"
          onClick={() => setSelectedCategory(null)}
        >
          Close
        </motion.button>
      )}
    </section>
  );
};

export default SocialMediaMarketing;
