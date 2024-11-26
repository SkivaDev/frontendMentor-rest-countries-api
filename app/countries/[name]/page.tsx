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
    <main className="flex justify-center items-center w-full pt-[83px]">
      <div className="text-color-text w-full max-w-[90rem] px-[80px]">
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
            <div className="flex justify-between mt-[80px]">
              <div className="flex-1">
                <Image
                  src={country.flags.png}
                  alt="flag"
                  className="w-[560px] h-[400px] object-cover"
                  width={560}
                  height={400}
                />
              </div>

              <div className="flex-1 p-6">
                <h2 className="text-[35px] font-bold mb-4">
                  {country.name.common}
                </h2>
                <div className="grid grid-cols-2 gap-y-4">
                  <div>
                    <span className="font-semibold">Native Name:</span>{" "}
                    {/* {country.name.nativeName[0].common} */}
                    {
                      (
                        Object.values(country.name.nativeName) as {
                          common: string;
                        }[]
                      )[0].common
                    }
                  </div>
                  <div>
                    <span className="font-semibold">Top Level Domain:</span>{" "}
                    {country.tld}
                  </div>
                  <div>
                    <span className="font-semibold">Population:</span>{" "}
                    {country.population}
                  </div>
                  <div>
                    <span className="font-semibold">Currencies:</span>{" "}
                    {Object.keys(country.currencies).join(", ")}
                  </div>
                  <div>
                    <span className="font-semibold">Region:</span>{" "}
                    {country.region}
                  </div>
                  <div>
                    <span className="font-semibold">Languages:</span>{" "}
                    {Object.values(country.languages).join(", ")}
                  </div>
                  <div>
                    <span className="font-semibold">Sub Region:</span>{" "}
                    {country.subregion}
                  </div>
                  <div>
                    <span className="font-semibold"></span>{" "}
                  </div>
                  <div>
                    <span className="font-semibold">Capital:</span>{" "}
                    {country.capital}
                  </div>
                </div>

                <div className="flex items-center mt-[30px]">
                  <h3 className="text-[24px] font-bold">Border Countries:</h3>
                  <div className="flex gap-4">
                    {country.borders.map((border: string) => (
                      <button
                        key={border}
                        className="bg-elements text-color-text/85 px-6 py-2 rounded-md shadow-md"
                      >
                        {border}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CountryPage;
