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
    <nav className="bg-transparent ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-32">
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
            <div className="header">
              <a href="/" className="flex-shrink-0 flex ml-[30px] sm:ml-0">
                <h1 className="text-4xl font-bold font-sans">Reza</h1>
                <h2 className="text-[#FF204E] opacity-80 px-2">Front-end</h2>
              </a>
            </div>
            <div className="sm:hidden flex items-center">
              <ModeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              <a href="#skills" onClick={(e) => handleLinkClick(e, "skills")}>
                <div className="text-2xl opacity-80 px-3 py-2 font-light">
                  <span className="hover:bg-gradient-to-r hover:from-[#FF204E] hover:via-[#5D0E41] hover:to-[#00224D] hover:bg-clip-text hover:text-transparent">
                    Skills
                  </span>
                </div>
              </a>
              <a
                href="#experience"
                onClick={(e) => handleLinkClick(e, "experience")}
              >
                <div className="text-2xl opacity-80 px-3 py-2 font-light">
                  <span className="hover:bg-gradient-to-r hover:from-[#FF204E] hover:via-[#5D0E41] hover:to-[#00224D] hover:bg-clip-text hover:text-transparent">
                    Experiences
                  </span>
                </div>
              </a>
              <a href="#project" onClick={(e) => handleLinkClick(e, "project")}>
                <div className="text-2xl opacity-80 px-3 py-2 font-light">
                  <span className="hover:bg-gradient-to-r hover:from-[#FF204E] hover:via-[#5D0E41] hover:to-[#00224D] hover:bg-clip-text hover:text-transparent">
                    Projects
                  </span>
                </div>
              </a>
              <a href="#Contact" onClick={(e) => handleLinkClick(e, "Contact")}>
                <div className="text-2xl opacity-80 px-3 py-2 font-light">
                  <span className="hover:bg-gradient-to-r hover:from-[#FF204E] hover:via-[#5D0E41] hover:to-[#00224D] hover:bg-clip-text hover:text-transparent">
                    Contact
                  </span>
                </div>
              </a>
              <a
                href="/Muhammad_Reza_Aditria-resume.pdf"
                download="Muhammad_Reza_Aditria-resume.pdf"
                className="text-2xl opacity-80 px-3 py-2 font-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path
                      strokeDasharray="2 4"
                      strokeDashoffset="6"
                      d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        dur="0.6s"
                        repeatCount="indefinite"
                        values="6;0"
                      />
                    </path>
                    <path
                      strokeDasharray="32"
                      strokeDashoffset="32"
                      d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.1s"
                        dur="0.4s"
                        values="32;0"
                      />
                    </path>
                    <path
                      strokeDasharray="10"
                      strokeDashoffset="10"
                      d="M12 8v7.5"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.5s"
                        dur="0.2s"
                        values="10;0"
                      />
                    </path>
                    <path
                      strokeDasharray="6"
                      strokeDashoffset="6"
                      d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.7s"
                        dur="0.2s"
                        values="6;0"
                      />
                    </path>
                  </g>
                </svg>
              </a>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden fixed inset-0 z-50 transition-transform duration-300 ease-in-out bg-white dark:bg-neutral-950 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 focus:outline-none"
        >
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="pt-32 pb-3 space-y-1 z-999 flex flex-col items-center">
          <a
            href="#skills"
            onClick={(e) => handleLinkClick(e, "skills")}
            className="block text-2xl opacity-80 px-3 py-2 font-light text-center"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={(e) => handleLinkClick(e, "experience")}
            className="block text-2xl opacity-80 px-3 py-2 font-light text-center"
          >
            Experiences
          </a>
          <a
            href="#project"
            onClick={(e) => handleLinkClick(e, "project")}
            className="block text-2xl opacity-80 px-3 py-2 font-light text-center"
          >
            Projects
          </a>
          <a
            href="#Contact"
            onClick={(e) => handleLinkClick(e, "Contact")}
            className="block text-2xl opacity-80 px-3 py-2 font-light text-center"
          >
            Contact
          </a>
          <a
            href="/Curriculum-Vitae.pdf"
            download
            className="block text-2xl opacity-80 px-3 py-2 font-light text-center"
          >
            Curriculum Vitae
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
