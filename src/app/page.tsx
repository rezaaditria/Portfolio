import React from "react";
import MainPage from "./(Root)/Main/MainPage";
import RetroGrid from "@/components/magicui/retro-grid";
import Navbar from "@/components/Navbar/Navbar";
import { ThemeProvider } from "@/components/Providers/theme-provider";

const page = () => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <RetroGrid />
        <MainPage />
      </ThemeProvider>
    </>
  );
};

export default page;
