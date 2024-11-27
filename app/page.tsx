"use client";

import { CountryCard } from "@/components/CountryCard";
import { FilterNameCountry } from "@/components/FilterNameCountry";
import { FilterRegions } from "@/components/FilterRegions";
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something was wrong when loading countries... </div>;

  return (
    <main className="flex justify-center items-center w-full pt-[50px]">
      <div className="text-color-text w-full max-w-[90rem] px-[80px]">
        <div className="">
          <section className="flex justify-between items-center w-full">
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
            <div className="countries-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[75px] gap-y-[73px] mt-[47px]">
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
