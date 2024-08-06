"use client";
import React, { useState, MouseEvent } from "react";
import { ModeToggle } from "../ui/toggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // Smooth scrolling behavior
      });
      setIsOpen(false); // Close the navbar when a link is clicked
    }
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-32">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 flex sm:items-stretch sm:justify-start">
            <div className="header">
              <a href="/" className="flex-shrink-0 flex ml-[30px] sm:ml-0">
                <h1 className=" text-4xl font-bold font-sans">Reza</h1>
                <h2 className="text-[#FF204E] opacity-80 px-2 hover:">
                  Front-end
                </h2>
              </a>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4 justify-end">
              <a href="#skills" onClick={(e) => handleLinkClick(e, "skills")}>
                <div className="text-2xl opacity-80  px-3 py-2 font-light">
                  <span className="hover:bg-gradient-to-r hover:from-[#FF204E] hover:via-[#5D0E41] hover:to-[#00224D] hover:bg-clip-text hover:text-transparent">
                    Skills
                  </span>
                </div>
              </a>
              <a
                href="#experience"
                onClick={(e) => handleLinkClick(e, "experience")}
              >
                <div className="text-2xl opacity-80  px-3 py-2 font-light">
                  <span className="hover:bg-gradient-to-r hover:from-[#FF204E] hover:via-[#5D0E41] hover:to-[#00224D] hover:bg-clip-text hover:text-transparent">
                    Experiences
                  </span>
                </div>
              </a>
              <a href="#project" onClick={(e) => handleLinkClick(e, "project")}>
                <div className="text-2xl opacity-80  px-3 py-2 font-light">
                  <span className="hover:bg-gradient-to-r hover:from-[#FF204E] hover:via-[#5D0E41] hover:to-[#00224D] hover:bg-clip-text hover:text-transparent">
                    Projects
                  </span>
                </div>
              </a>
              <a href="#Contact" onClick={(e) => handleLinkClick(e, "Contact")}>
                <div className="text-2xl opacity-80  px-3 py-2 font-light">
                  <span className="hover:bg-gradient-to-r hover:from-[#FF204E] hover:via-[#5D0E41] hover:to-[#00224D] hover:bg-clip-text hover:text-transparent">
                    Contact
                  </span>
                </div>
              </a>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
