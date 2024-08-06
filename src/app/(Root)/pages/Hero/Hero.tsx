"use client";
import React from "react";
import Image from "next/image";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto p-1">
      <div className="grid grid-cols-1 pt-5 pb-20">
        <div className="relative flex justify-center items-center opacity-100 ">
          <VelocityScroll
            text="Muhammad Reza Aditria"
            default_velocity={1}
            className="font-display w-dvw text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/profile/nobg.png"
              width={300}
              height={300}
              alt="Reza"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
