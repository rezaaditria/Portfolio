"use client";
import React from "react";
import Image from "next/image";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

const Hero: React.FC = () => {
  return (
    <div className="w-screen pt-24">
      <div className="grid grid-cols-1 h-fit py-auto">
        <div className="relative flex justify-center items-center w-full">
          <VelocityScroll
            text="Muhammad Reza Aditria"
            default_velocity={1}
            className="font-display w-screen text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <NeonGradientCard>
              <Image
                src="/profile/nobg.png"
                width={300}
                height={300}
                alt=" "
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64"
              />
            </NeonGradientCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
