import React from "react";
import { SkillAlter } from "../../../components/Skills/SkillAlter";
import Hero from "../pages/Hero/Hero";
import { About } from "../pages/About/About";
import BlurIn from "@/components/magicui/blur-in";
import { Experiences } from "../pages/Experiences/Experiences";
import { Project } from "../pages/Projects/project";
import { Contact } from "../pages/Contact/contact";

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <div id="">
        <Hero />
      </div>
      <About />
      <div id="skills">
        <BlurIn
          word="Here's some of my skills"
          className="text-2xl font-bold text-black dark:text-white"
        />
        <SkillAlter />
      </div>
      <div id="experience">
        <BlurIn
          word="And here's some of my experiences"
          className="text-2xl font-bold text-black dark:text-white mt-28"
        />
        <Experiences />
      </div>
      <div id="project">
        <BlurIn
          word="These are my project i've been working on"
          className="text-2xl font-bold text-black dark:text-white mt-28"
        />
        <Project />
      </div>

      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default MainPage;
