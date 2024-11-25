import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;