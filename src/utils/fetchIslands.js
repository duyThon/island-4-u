export const fetchIslands = async () => {
  try {
    const res = await fetch("/data/islands.json");
    if (!res.ok) {
      throw new Error("Failed to fetch islands data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching islands:", error);
    return [];
  }
};
