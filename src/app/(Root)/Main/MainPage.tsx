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
      <Hero />
      <About />

      <div id="skills">
        <SkillAlter />
      </div>

      <div id="experience" className="px-5"></div>
      <Experiences />

      <div id="project" className="px-5"></div>
      <Project />

      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default MainPage;
