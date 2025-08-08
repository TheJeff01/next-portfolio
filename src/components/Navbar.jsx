"use client";
import Link from "next/link";
import { Images } from "./assets/images/Images";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import clsx from "clsx";

function NavBar() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSideMenuOpen]);

  const navLinks = [
    { label: "Portfolio", link: "#portfolio" },
    { label: "About Me", link: "#about" },
    { label: "My Projects", link: "#projects" },
    { label: "Review", link: "#review" },
  ];

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    
    if (href === "#") return;
    
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setMenu(false);
  };

  return (
    <main>
      {/* Enhanced Navbar with better sticky behavior */}
      <nav className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "p-4 lg:px-8",
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-700/50" 
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700"
      )}>
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative">
          {/* Left - Logo */}
          <div className="flex items-center gap-4">
            <img src={Images.logo} alt="Logo" className="w-24 h-auto" />
          </div>

          {/* Center - Nav links (desktop only) */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-8">
            {navLinks.map((d, i) => (
              <Link 
                key={i} 
                href={d.link}
                onClick={(e) => handleSmoothScroll(e, d.link)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium relative group"
              >
                {d.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right - Theme toggle, Contact button & mobile menu icon */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <HiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <HiSun className="w-5 h-5 text-yellow-500" />
              )}
            </button>

            {/* Desktop contact button */}
            <div className="hidden lg:flex">
              <button 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="flex items-center gap-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-6 py-2 rounded-full transition-all duration-300 font-medium"
              >
                <img src={Images.contact} alt="Contact Icon" className="w-5 h-5" />
                Contact Me
              </button>
            </div>

            {/* Mobile menu icon */}
            <CiMenuFries
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            />
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Sidebar with better positioning */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden",
          isSideMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
        onClick={() => setMenu(false)}
      >
        <section 
          className={clsx(
            "absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl flex flex-col justify-between transition-transform duration-300 z-[70]",
            isSideMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with close button */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h3>
              <IoClose
                onClick={() => setMenu(false)}
                className="text-3xl cursor-pointer text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors duration-200"
              />
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex-1 p-6">
            <div className="flex flex-col gap-6">
              {navLinks.map((d, i) => (
                <Link
                  key={i}
                  href={d.link}
                  onClick={(e) => handleSmoothScroll(e, d.link)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-lg font-medium transition-colors duration-200 py-2 border-b border-gray-100 dark:border-gray-800"
                >
                  {d.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer with contact button and theme toggle */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {theme === 'light' ? (
                  <HiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <HiSun className="w-5 h-5 text-yellow-500" />
                )}
              </button>
            </div>
            <button 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="flex items-center gap-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-6 py-3 rounded-full w-full justify-center transition-all duration-300 font-medium"
            >
              <img src={Images.contact} alt="Contact Icon" className="w-5 h-5" />
              Contact Me
            </button>
          </div>
        </section>
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </main>
  );
}

export default NavBar;