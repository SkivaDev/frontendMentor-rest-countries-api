const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchAllContries = async () => {
  await sleep(5000);
  const response = await fetch("https://restcountries.com/v3.1/all");
  const facts = await response.json();
  return facts;
};

export const fetchCountryByName = async (name: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  return response.json();
};
