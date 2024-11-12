'use client';
import { useTheme } from "@/hooks/use-theme";
import Image from "next/image";
import React from "react";

const Header = () => {

  const { toggleTheme, isDark } = useTheme();


  return (
    <header className="w-full bg-elements text-color-text">
      <div className="flex justify-between items-center w-full h-[78px] px-[80px]">
        <h1 className="text-[20px] font-bold tracking-[1.9px] ml-1">
          Where in the world?
        </h1>
        <button
          id="theme-toggle-btn"
          className=" flex justify-center items-center gap-3"
          onClick={toggleTheme}
        >
          <Image src={isDark ? './mode-dark.svg' : './mode-light.svg'} alt="theme icon" width={20} height={20}/>
          <span className="">Dark mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
