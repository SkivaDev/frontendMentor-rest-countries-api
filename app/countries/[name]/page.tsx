"use client";
import { useCountry } from "@/services/queries";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const CountryPage = () => {
  //catch the name of the country from the URL
  const { name } = useParams();

  //fetch the data of the country from the API

  const { data, isLoading, error } = useCountry(name as string);
  const country =
    data && Array.isArray(data) && data.length > 0 ? data[0] : null;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading country data</div>;

  return (
    <main>
      <div className="text-color-text px-[80px] min-h-screen pt-[83px]">
        <div>
          <section className="w-full flex justify-start items-center">
            <button className="flex items-center justify-center w-full max-w-[135px] py-2 bg-background shadow-md pr-[7px] gap-[8px] ">
              <span className="mr-[1px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23px"
                  height="23px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m3 12l5 5m-5-5l5-5m-5 5h18"
                  />
                </svg>
              </span>
              <span>Back</span>
            </button>
          </section>

          <section className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[75px] gap-y-[73px] mt-[47px]">
              <div className="country-card">
                <Image
                  src={country.flags.png}
                  alt="flag"
                  className="w-full h-[200px] object-cover"
                  width={400}
                  height={400}
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    {country.name.common}
                  </h2>
                  <div className="grid grid-cols-2 gap-y-4">
                    <div>
                      <span className="font-semibold">Population:</span>{" "}
                      {country.population}
                    </div>
                    <div>
                      <span className="font-semibold">Region:</span>{" "}
                      {country.region}
                    </div>
                    <div>
                      <span className="font-semibold">Sub Region:</span>{" "}
                      {country.subregion}
                    </div>
                    <div>
                      <span className="font-semibold">Capital:</span>{" "}
                      {country.capital}
                    </div>
                    <div>
                      <span className="font-semibold">Top Level Domain:</span>{" "}
                      {country.tld}
                    </div>
                    {/* <div>
                      <span className="font-semibold">Currencies:</span>{" "}
                      {Object.values(country.currencies).map(
                        (currency: any, index: number) => (
                          <span key={index}>{currency.name}</span>
                        )
                      )}
                    </div>
                    <div>
                      <span className="font-semibold">Languages:</span>{" "}
                      {Object.values(country.languages).map((language: any) => (
                        <span key={language}>{language}</span>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>Name, {country?.name?.common}!</div>
      <div>{name}</div>
      {/* <div>Native name, {name.nativeName[1].common}!</div>
      <div>Population, {population}!</div>
      <div>region, {region}!</div>
      <div>subregion, {subregion ? subregion : "No subregion"}!</div>
      <div>capital, {capital}!</div>
      <div>Top level domain, {tld}!</div>
      <div>
        currencies,{" "}
        {Object.values(currencies).map((currency: any) => (
          <p>{currency.name}</p>
        ))}
        !
      </div>
      <div>
        languages,{" "}
        {Object.values(languages).map((language: any) => (
          <p>{language}</p>
        ))}
        !
      </div> */}
    </main>
  );
};

export default CountryPage;
