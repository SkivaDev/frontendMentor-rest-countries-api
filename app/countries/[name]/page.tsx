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

  if (error) return <div className="text-red-500 text-center mt-4">Error loading country data</div>;

  const borders = borderData ?? [];

  return (
    <main className="flex justify-center items-center w-full pt-[83px]">
      <div className="text-color-text w-full max-w-[90rem] px-[80px]">
        <section className="w-full flex justify-start items-center">
          <Link
            className="flex items-center justify-center w-full max-w-[135px] py-2 bg-background shadow-md pr-[7px] gap-[8px] hover:bg-elements/60 hover:outline hover:outline-1 hover:outline-color-text rounded-md"
            href="/"
          >
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
          </Link>
        </section>

        <section className="w-full">
          <div className="flex justify-between mt-[80px]">
            <div className="flex-1">
              <Image
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                width={560}
                height={400}
                className="w-[560px] h-[400px] object-cover"
              />
            </div>

            <div className="flex-1 p-6">
              <h2 className="text-[35px] font-bold mb-4">
                {country.name.common}
              </h2>
              {/* Información del país */}
              <div className="grid grid-cols-2 gap-y-4">
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
              </div>

              {/* Lista de países vecinos */}
              <div className="flex gap-3 mt-[30px]">
                <h3 className="text-[18px] font-semibold text-nowrap">
                  Border Countries:
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {bordersLoading && <div>Loading borders...</div>}
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
