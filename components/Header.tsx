'use client';
import { useTheme } from "@/hooks/use-theme";
import Image from "next/image";
import React from "react";

const Header = () => {

  const { toggleTheme, isDark } = useTheme();


  return (
    <header className="flex justify-center items-center w-full bg-elements text-color-text shadow">
      <div className="flex justify-between items-center w-full max-w-[90rem] h-[80px] sm:h-[78px] px-[22px] md:px-[80px]">
        <h1 className="text-[14px] sm:text-[20px] font-bold sm:tracking-[1.9px] sm:ml-1">
          Where in the world?
        </h1>
        <button
          id="theme-toggle-btn"
          className=" flex justify-center items-center gap-3"
          onClick={toggleTheme}
        >
          <Image src={isDark ? '/icons/modeDark.svg' : '/icons/modeLight.svg'} alt="theme icon" width={20} height={20} className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"/>
          <span className="text-[12px] sm:text-base">Dark mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
