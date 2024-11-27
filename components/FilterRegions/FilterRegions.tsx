"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { FilterRegionsProps } from "./FilterRegions.types";

const regions: string[] = [
  "All",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
];

export const FilterRegions = (props: FilterRegionsProps) => {

  const { selectedRegion, setSelectedRegion } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className="relative inline-block w-[12.5rem] shadow-md">
      <button
        type="button"
        onClick={toggleDropdown}
        className="combobox-toggle flex justify-between items-center w-full bg-elements border border-gray-300 rounded-md px-[1.3125rem] py-[.9375rem] text-left focus:outline-none text-[.875rem] font-semibold"
      >
        <p className="combobox-selected text-nowrap">{selectedRegion === 'All' ? 'Filter by region' : selectedRegion}</p>
        <span className="float-right">&#x25BC;</span>
      </button>

      <ul
        id="dropdown-menu"
        className={cn(
          isOpen ? "block" : "hidden",
          "absolute left-0 right-0 mt-2 bg-elements border border-gray-300 rounded-md shadow-lg z-10"
        )}
      >
        {regions.map((region) => (
          <li
            key={region}
            onClick={() => handleRegionSelect(region)}
            className="px-4 py-2 hover:bg-gray-400 cursor-pointer"
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
};


