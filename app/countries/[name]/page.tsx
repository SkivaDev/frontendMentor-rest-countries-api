"use client";
import { useCountry } from "@/services/queries";
import { useParams } from "next/navigation";
import React from "react";

const CountryPage = () => {

  //catch the name of the country from the URL
  const { name } = useParams();


  //fetch the data of the country from the API

  const { data, isLoading, error } = useCountry(name as string);
  const country = data && Array.isArray(data) && data.length > 0 ? data[0] : null;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading country data</div>;


  return (
    <>
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
    </>
  );
};

export default CountryPage;
