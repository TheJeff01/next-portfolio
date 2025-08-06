"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Images } from "./assets/images/Images";
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp,
  FaReact,
  FaJs
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { HiCode } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" }
    ],
    services: [
      { name: "Web Development", href: "#" },
      { name: "Frontend Development", href: "#" },
      { name: "React Applications", href: "#" },
      { name: "Next.js Solutions", href: "#" },
      { name: "UI/UX Implementation", href: "#" }
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "Resume", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Testimonials", href: "#" }
    ]
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/jeffery-ibeh-099064247",
      icon: <FaLinkedin />,
      color: "hover:bg-blue-600"
    },
    {
      name: "GitHub",
      href: "https://github.com/TheJeff01",
      icon: <FaGithub />,
      color: "hover:bg-gray-800 dark:hover:bg-gray-600"
    },
    {
      name: "Twitter",
      href: "https://x.com/JefferyIbeh",
      icon: <FaTwitter />,
      color: "hover:bg-blue-400"
    },
    {
      name: "Email",
      href: "mailto:jeffreyibeh501@gmail.com",
      icon: <FaEnvelope />,
      color: "hover:bg-red-500"
    }
  ];

  const techStack = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Grid pattern */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <FaArrowUp />
      </motion.button>

      <div className="container max-w-7xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={Images.logo} 
                  alt="Jeffery Ibeh Logo" 
                  className="w-16 h-auto"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Jeffery Ibeh
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Frontend Developer
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Passionate about creating exceptional digital experiences through 
                clean code and innovative design. Let's build something amazing together.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
                  <span className="text-sm">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                  <a 
                    href="mailto:jeffreyibeh501@gmail.com"
                    className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    jefferyibeh501@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <FaPhone className="text-blue-600 dark:text-blue-400" />
                  <a 
                    href="tel:+2348154620848"
                    className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +234 815 462 0840
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources & Tech Stack */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Resources
              </h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.resources.map((resource, index) => (
                  <li key={index}>
                    <Link
                      href={resource.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-200"></span>
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div>
                <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                  Built With
                </h5>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-blue-600 dark:text-blue-400">
                        {tech.icon}
                      </span>
                      {tech.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links Section */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Let's Connect
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Follow me for updates on my latest projects and insights
                </p>
              </div>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-gray-200 dark:border-gray-700 pt-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <HiCode className="text-blue-600 dark:text-blue-400" />
                <span>
                  © {currentYear} Jeffery Ibeh. All rights reserved.
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <Link 
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link 
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <span>Made with</span>
                  <FaHeart className="text-red-500 text-xs animate-pulse" />
                  <span>in Nigeria</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;