"use client";

import { FilterRegions } from "@/components/FilterRegions";
import { CountryCard } from "@/components/CountryCard";
import Search from "@/components/Search";
import { Country } from "@/types/country";
import { fetchAllContries } from "@/utils/fetch";
import { Suspense, useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    (
      async () => {
        const data = await fetchAllContries();
        setCountries(data);
      }
    )()
  }, []);

  return (
    <main className="">
      <div className="text-color-text px-[80px] min-h-screen pt-[50px]">
        <div className="">
          <section className="flex justify-between items-center w-full">
            <Search />
            <FilterRegions
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
          </section>

          <section>
            <div className="countries-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[75px] gap-y-[73px] mt-[47px]">
              <Suspense
                fallback={
                  <div className="text-center text-lg font-semibold text-gray-500">
                    Loading Countries...
                  </div>
                }
              >
                {countries.map((country: Country) => (
                  <CountryCard key={country.name.common} country={country} />
                ))}
              </Suspense>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
