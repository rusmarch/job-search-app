
export const getJobsBySearch = async (search: string) => {
  const response = await fetch(`/search?q=${search}`);

  if (!response.ok) throw new Error("Unable to fetch jobs.");

  return response.json();
};
