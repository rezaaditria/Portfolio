import React from "react";
import { SkillAlter } from "@/components/Skills/SkillAlter";
import Hero from "../pages/Hero/Hero";
import { About } from "../pages/About/About";
import { Experiences } from "../pages/Experiences/Experiences";
import { Project } from "../pages/Projects/project";
import { Contact } from "../pages/Contact/contact";
import FadeContent from "@/components/magicui/faded";

const MainPage = () => {
  return (
    <div className="min-h-screen">
      <FadeContent
        blur={true}
        duration={2000}
        easing="ease-out"
        initialOpacity={0}
      >
        <Hero />
      </FadeContent>

      <About />

      <div id="skills">
        <SkillAlter />
      </div>

      <div id="experience" className="px-5">
        <Experiences />
      </div>

      <div id="project" className="px-5"></div>
      <Project />

      <div id="Contact">
        <FadeContent
          blur={true}
          duration={2000}
          easing="ease-out"
          initialOpacity={0}
        >
          <Contact />
        </FadeContent>
      </div>
    </div>
  );
};

export default MainPage;
