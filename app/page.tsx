'use client';
import { FilterRegions } from "@/components/FilterRegions";
import Search from "@/components/Search";
import { useState } from "react";

export default function Home() {

  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  // const [countries, setCountries] = useState<Country[]>([]);


  return (
    <main className="">
    <div className="text-color-text px-[80px] min-h-screen pt-[50px]">
      <div className="">
        <div className="flex justify-between items-center w-full">
          <Search />
          <FilterRegions selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
        </div>

        <section>
          <div
            className="countries-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[75px] gap-y-[73px] mt-[47px]"
          >


          </div>
        </section>
      </div>
    </div>
  </main>
  );
}
