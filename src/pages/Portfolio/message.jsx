import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Message = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="relative bg-white rounded-lg shadow-2xl p-8 max-w-md w-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-2 bg-red-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
        <motion.svg
          className="w-32 h-32 mx-auto mb-8"
          viewBox="0 0 100 100"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#FF0000"
            strokeWidth="10"
            fill="none"
            variants={circleVariants}
            custom={0}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            stroke="#000000"
            strokeWidth="10"
            fill="none"
            variants={circleVariants}
            custom={1}
          />
          <motion.path
            d="M 50 35 L 50 65 M 35 50 L 65 50"
            stroke="#FF0000"
            strokeWidth="8"
            strokeLinecap="round"
            variants={circleVariants}
            custom={2}
          />
        </motion.svg>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Crafting Something Extraordinary
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Our team of digital artisans is meticulously constructing a 
          groundbreaking online experience. Each pixel, each line of code 
          is being perfected just for you.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Notify Me
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-black text-white font-semibold rounded-md shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">Estimated Completion</p>
          <div className="font-mono text-2xl text-red-600">{progress}%</div>
        </div>
      </div>
    </div>
  )
}

export default Message
