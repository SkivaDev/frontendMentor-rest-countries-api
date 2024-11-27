import React from "react";
import { CountryCardProps } from "./CountryCard.types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const CountryCard = (props: CountryCardProps) => {
  const { country } = props;
  const router = useRouter();

  const handleOnClick = () => {
    // navigate to country page

    router.push(`/countries/${country.name.common.toLowerCase()}`);
  };

  return (
    <div
      className="bg-elements shadow-md rounded-md overflow-hidden cursor-pointer"
      onClick={handleOnClick}
    >
      <Image
        src={country.flags.svg}
        alt={country.name.common}
        className="w-full h-[12.5rem] object-cover"
        width={200}
        height={0}
      />
      <div className="p-6">
        <h2
          className="text-color
        -text font-extrabold text-[1.125rem] mb-4"
        >
          {country.name.common}
        </h2>
        <p className="text-color-text font-medium text-[.875rem] mb-2">
          <span className="font-bold">Population:</span>{" "}
          {country.population}
        </p>
        <p className="text-color-text font-medium text-[.875rem] mb-2">
          <span className="font-bold">Region:</span> {country.region}
        </p>
        <p className="text-color-text font-medium text-[.875rem] mb-2">
          <span className="font-bold">Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
};
