"use client";
import Link from "next/link";
import { Images } from "./assets/images/Images";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import clsx from "clsx";

function NavBar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navLinks = [
    { label: "Portfolio", link: "#" },
    { label: "About Me", link: "#" },
    { label: "My Projects", link: "#" },
    { label: "Review", link: "#" },
  ];

  return (
    <main>
      {/* Navbar wrapper with max width */}
      <nav className="relative p-4 lg:px-8 bg-white shadow-md">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative">
          {/* Left - Logo */}
          <div className="flex items-center gap-4">
            <img src={Images.logo} alt="Logo" className="w-24 h-auto" />
          </div>

          {/* Center - Nav links (desktop only) */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-8">
            {navLinks.map((d, i) => (
              <Link key={i} href={d.link} className="text-gray-700 hover:text-black">
                {d.label}
              </Link>
            ))}
          </div>

          {/* Right - Contact button & mobile menu icon */}
          <div className="flex items-center gap-4">
            {/* Desktop contact button */}
            <div className="hidden lg:flex">
              <button className="flex items-center gap-2 border-2 border-black text-black px-4 py-2 rounded-3xl">
                <img src={Images.contact} alt="Contact Icon" className="w-5 h-5" />
                Contact Me
              </button>
            </div>

            {/* Mobile menu icon */}
            <CiMenuFries
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-transform duration-300 transform lg:hidden",
          isSideMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <section className="absolute right-0 top-0 h-full w-64 bg-white p-6 flex flex-col justify-between">
          {/* Close button & nav links */}
          <div className="flex flex-col gap-6">
            <IoClose
              onClick={() => setMenu(false)}
              className="text-3xl cursor-pointer self-end"
            />
            {navLinks.map((d, i) => (
              <Link
                key={i}
                href={d.link}
                className="text-gray-700 hover:text-black"
              >
                {d.label}
              </Link>
            ))}
          </div>

          {/* Contact button in mobile */}
          <div className="mt-8">
            <button className="flex items-center gap-2 border-2 border-black text-black px-4 py-2 rounded-3xl w-full justify-center">
              <img src={Images.contact} alt="Contact Icon" className="w-5 h-5" />
              Contact Me
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NavBar;
