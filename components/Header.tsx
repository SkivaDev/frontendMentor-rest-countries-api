'use client';
import { useTheme } from "@/hooks/use-theme";
import Image from "next/image";
import React from "react";

const Header = () => {

  const { toggleTheme, isDark } = useTheme();


  return (
    <header className="flex justify-center items-center w-full bg-elements text-color-text shadow">
      <div className="flex justify-between items-center w-full max-w-[1440px] h-[5rem] sm:h-[4.875rem] px-[1.375rem] md:px-[5rem]">
        <h1 className="text-[.875rem] sm:text-[1.25rem] font-bold sm:tracking-[.1187rem] sm:ml-1">
          Where in the world?
        </h1>
        <button
          id="theme-toggle-btn"
          className=" flex justify-center items-center gap-3"
          onClick={toggleTheme}
        >
          <Image src={isDark ? '/icons/modeDark.svg' : '/icons/modeLight.svg'} alt="theme icon" width={20} height={20} className="w-[1rem] h-[1rem] sm:w-[1.25rem] sm:h-[1.25rem]"/>
          <span className="text-[.75rem] sm:text-base">Dark mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
