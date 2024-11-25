import { Country } from "@/types/country";
import useSWR from "swr";

export function useCountries() {
    return useSWR<Country[]>('/all');
}