import React from 'react'
import { CountryCardProps } from './CountryCard.types'
import Image from 'next/image';

export const CountryCard = (props: CountryCardProps) => {

    const { country } = props;

  return (
    <div className="bg-elements shadow-md rounded-md overflow-hidden">
    <Image src={country.flags.svg} alt={country.name.common} className="w-full h-[200px] object-cover" width={200} height={200}/>
    <div className="p-6">
        <h2 className="text-color
        -text font-semibold text-[18px] mb-4">{country.name.common}</h2>
        <p className="text-color-text font-medium text-[14px] mb-2">
            <span className="font-semibold">Population:</span> {country.population}
        </p>
        <p className="text-color-text font-medium text-[14px] mb-2">
            <span className="font-semibold">Region:</span> {country.region}
        </p>
        <p className="text-color-text font-medium text-[14px] mb-2">
            <span className="font-semibold">Capital:</span> {country.capital}
        </p>
    </div>
</div>
  )
}
