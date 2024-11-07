import { atom } from 'nanostores';

export const isDarkMode = atom(true);

export const countries = atom([]);

export const selectedRegion = atom('All');

export const inputSearch = atom('');

export const selectedCountry = atom(null);