"use client";
import { SkeletonDetails } from "@/components/SkeletonDetails";
import { useCountry, useGetCountriesByCode } from "@/services/queries";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const CountryPage = () => {
  const { name } = useParams();

  // Fetching del país principal
  const { data, isLoading, error } = useCountry(name as string);
  const country =
    data && Array.isArray(data) && data.length > 0 ? data[0] : null;

  // Fetching de los países vecinos
  const { data: borderData, isLoading: bordersLoading } = useGetCountriesByCode(
    country?.borders || []
  );

  // Estados de carga y errores
  if (isLoading) return <SkeletonDetails />;

  if (error)
    return (
      <div className="text-red-500 text-center mt-4">
        Error loading country data
      </div>
    );

  const borders = borderData ?? [];

  return (
    <main className="flex justify-center items-center w-full pt-[3.125rem] md:pt-[5.1875rem]">
      <div className="text-color-text w-full max-w-[1440px] px-[1.375rem] md:px-[5rem]">
        <section className="w-full flex justify-start items-center">
          <Link
            className="flex items-center justify-center w-full max-w-[8.4375rem] py-2 bg-elements shadow-md pr-[.4375rem] gap-[.5rem] hover:bg-elements/60 hover:outline hover:outline-1 hover:outline-color-text rounded-md"
            href="/"
          >
            <span className="mr-[.0625rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.4375rem"
                height="1.4375rem"
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
          </Link>
        </section>

        <section className="w-full">
          <div className="flex flex-col md:flex-row justify-between mt-[1.875rem] md:mt-[5rem]">
            <div className="flex-1">
              <Image
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                width={560}
                height={400}
                className="w-full h-auto md:w-[25rem] md:h-[17.8438rem] lg:w-[35rem] lg:h-[25rem] object-cover"
              />
            </div>

            <div className="flex-1 p-6">
              <h2 className="text-[2.1875rem] font-bold mb-4">
                {country.name.common}
              </h2>
              {/* Información del país */}
              <div className="text-color-text text-[.875rem] lg:text-base grid  grid-cols-1 sm:grid-cols-2 gap-y-4">
                <div>
                  <span className="font-semibold">Native Name:</span>{" "}
                  {
                    (
                      Object.values(country.name.nativeName) as {
                        common: string;
                      }[]
                    )[0]?.common
                  }
                </div>
                <div>
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  {country.tld.join(", ")}
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
                  <span className="font-semibold">Subregion:</span>{" "}
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

              {/* Lista de países vecinos */}
              <div className="flex flex-col lg:flex-row gap-3 mt-[1.875rem]">
                <h3 className="text-[1.125rem] font-semibold text-nowrap">
                  Border Countries:
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {bordersLoading && (
                    <div className="flex flex-col lg:flex-row gap-3 mt-[1.875rem]">
                      <div className="h-5 bg-gray-300 rounded-md w-[9.375rem] animate-pulse mb-2 lg:mb-0" />
                      <div className="flex gap-4 flex-wrap">
                        {Array.from({ length: 3 }).map((_, index) => (
                          <div
                            key={index}
                            className="bg-gray-200 px-5 py-2 rounded-md shadow-md w-[6.25rem] h-8 animate-pulse"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  {borders.map((border) => (
                    <Link
                      key={border.cca3}
                      className="bg-elements text-color-text/85 px-5 py-1 rounded-md shadow-md hover:bg-elements/60 hover:outline hover:outline-1 hover:outline-color-text"
                      href={`/countries/${border.name.common}`}
                    >
                      {border.name.common}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CountryPage;
