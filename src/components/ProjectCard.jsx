"use client";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

function ProjectCard(props) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative mb-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border border-gray-200 dark:border-gray-700 overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient overlay for enhanced visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative z-10"
      >
        {/* Image Container with enhanced effects */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-2xl">
          <img 
            src={props.thumbnail} 
            alt={props.heading}
            className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
          />
          
          {/* Overlay with link icon */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <HiExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
          </div>

          {/* Project status badge */}
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Live
          </div>
        </div>
        
        {/* Content Container with enhanced spacing */}
        <div className="p-6 space-y-4">
          {/* Tech Stack with improved styling */}
          <div className="flex flex-wrap gap-2">
            {props.techstack.split(' ').map((tech, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/70 dark:group-hover:to-purple-800/70 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Project Title with enhanced typography */}
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
            {props.heading}
          </h3>
        </div>
      </a>
      
      {/* Description (outside the link) with enhanced styling */}
      <div className="px-6 pb-6">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm lg:text-base line-clamp-3">
          {props.text}
        </p>
      </div>
      
      {/* Enhanced bottom accent with gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:h-2 transition-all duration-300" />
      
      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/20 dark:group-hover:border-blue-400/30 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default ProjectCard;