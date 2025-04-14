import React from "react";
import MainPage from "./(Root)/Main/MainPage";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/Providers/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Dither from "@/components/magicui/Dither";

const page = () => {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div> */}
        <MainPage />
      </ThemeProvider>
    </>
  );
};

export default page;
