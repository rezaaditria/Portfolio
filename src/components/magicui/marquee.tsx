"use client";
import React, { useState, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const movement = vertical ? event.clientY : event.clientX;
        setCurrentTranslate((prev) => prev + (movement - startPosition));
        setStartPosition(movement);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startPosition, vertical]);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartPosition(vertical ? event.clientY : event.clientX);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    setIsDragging(true);
    setStartPosition(
      vertical ? event.touches[0].clientY : event.touches[0].clientX
    );
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (isDragging) {
      const movement = vertical
        ? event.touches[0].clientY
        : event.touches[0].clientX;
      setCurrentTranslate((prev) => prev + (movement - startPosition));
      setStartPosition(movement);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={containerRef}
      style={{
        transform: vertical
          ? `translateY(${currentTranslate}px)`
          : `translateX(${currentTranslate}px)`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
