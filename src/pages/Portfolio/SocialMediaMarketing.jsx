import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Utensils,  Luggage, Heart, Sun , Dumbbell } from "lucide-react";

const categories = [
  { 
    title: "Real Estate",
    icon: Home,
    images:
     [
        "/Images/Social media Marketing/Medical Spa/image 0.webp", 
        "/Images/Social media Marketing/Medical Spa/image 01.webp",
        "/Images/Social media Marketing/Medical Spa/image 02.webp",
        "/Images/Social media Marketing/Medical Spa/image 03.webp",
        "/Images/Social media Marketing/Medical Spa/image 05.webp",

     ] 

},
  { 
    title: 
    "Restaurants", 
    icon: Utensils, 
    images: 
    [
        "/Images/Social media Marketing/Resturant/image 0.webp",
        "/Images/Social media Marketing/Resturant/image 01.webp",
        "/Images/Social media Marketing/Resturant/image 02.webp",
        "/Images/Social media Marketing/Resturant/image 03.webp",
        "/Images/Social media Marketing/Resturant/image 04.webp",
        "/Images/Social media Marketing/Resturant/image 05.webp",
        "/Images/Social media Marketing/Resturant/image 06.webp",
    ]
 },

  { 
    title: "Skincare", 
    icon: Heart, 
    images: 
    [
        "/Images/Social media Marketing/Skin Care/image 01.jpeg",
        "/Images/Social media Marketing/Skin Care/image 02.jpeg",
        "/Images/Social media Marketing/Skin Care/image 03.jpeg",
        "/Images/Social media Marketing/Skin Care/image 04.jpeg",
        "/Images/Social media Marketing/Skin Care/image 05.jpeg",
    
    ]
 },

 { 
    title: "Solar Company", 
    icon: Sun, 
    images: 
    [
        "/Images/Social media Marketing/Solar Company/image 01.webp",
        "/Images/Social media Marketing/Solar Company/image 02.webp",
        "/Images/Social media Marketing/Solar Company/image 03.webp",
        "/Images/Social media Marketing/Solar Company/image 04.webp",
        "/Images/Social media Marketing/Solar Company/image 05.webp",
   
    ]
},

 { 
    title: "Travel and Tours", 
    icon: Luggage,     
    
    images: 
    [
        "/Images/Social media Marketing/Travel and Tour/image 01.jpeg",
        "/Images/Social media Marketing/Travel and Tour/image 02.jpeg",
        "/Images/Social media Marketing/Travel and Tour/image 03.jpeg",
        "/Images/Social media Marketing/Travel and Tour/image 04.jpeg",

    ]
 },

 { 
    title: "Sports and Fitness", 
    icon: Dumbbell,     
    
    images: 
    [
        "/Images/Social media Marketing/Travel and Tour/image 01.jpeg",
        "/Images/Social media Marketing/Travel and Tour/image 02.jpeg",
        "/Images/Social media Marketing/Travel and Tour/image 03.jpeg",
        "/Images/Social media Marketing/Travel and Tour/image 04.jpeg",

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
    <section className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl text-red-600">Explore our wide range of professional services</p>
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
