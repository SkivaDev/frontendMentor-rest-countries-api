"use client";

import { CountryCard } from "@/components/CountryCard";
import { FilterNameCountry } from "@/components/FilterNameCountry";
import { FilterRegions } from "@/components/FilterRegions";
import SkeletonHome from "@/components/SkeletonHome/SkeletonHome";
import { useCountries } from "@/services/queries";
import { Country } from "@/types/country";
import { useState } from "react";

export default function Home() {
  const { data: countries, isLoading, error } = useCountries();
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredCountries = countries
    ?.filter((country: Country) =>
      selectedRegion === "All"
        ? true
        : country.region.toLowerCase() === selectedRegion.toLowerCase()
    )
    .filter((country: Country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (isLoading) return <SkeletonHome />;
  if (error) return <div className="text-red-500 text-center mt-4">Something went wrong when loading countries...</div>;

  return (
    <main className="flex justify-center items-center w-full pt-[50px]">
      <div className="text-color-text w-full max-w-[90rem] px-[22px] md:px-[80px]">
        <div className="">
          <section className="flex flex-col md:flex-row items-start md:items-center justify-between  w-full gap-6">
            <FilterNameCountry
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <FilterRegions
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
          </section>

          <section>
            <div className="countries-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 md:gap-x-[75px] gap-y-10 md:gap-y-[73px] mt-[47px]">
              {filteredCountries?.map((country: Country) => (
                <CountryCard key={country.name.common} country={country} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
