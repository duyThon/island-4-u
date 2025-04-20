export function handleSearch(
  islandsList,
  { sortType = null, sortBy = null, services = [], keyword = "" }
) {
  let result = [...islandsList];

  // Filter by type (rent/sale)
  if (sortType) {
    result = result.filter((item) => item.type === sortType);
  }

  // Filter by selected services
  if (services.length > 0) {
    result = result.filter((item) =>
      services.every((service) =>
        item.services.some((s) =>
          s.toLowerCase().includes(service.toLowerCase())
        )
      )
    );
  }

  // Keyword filter
  if (keyword.trim() !== "") {
    const lowerKeyword = keyword.toLowerCase();
    result = result.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerKeyword) ||
        item.location.toLowerCase().includes(lowerKeyword) ||
        item.services.some((service) =>
          service.toLowerCase().includes(lowerKeyword)
        )
    );
  }

  // Sorting
  if (sortBy) {
    if (sortBy.price === "asc") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy.price === "desc") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortBy.area === "asc") {
      result.sort((a, b) => Number(a.area) - Number(b.area));
    } else if (sortBy.area === "desc") {
      result.sort((a, b) => Number(b.area) - Number(a.area));
    }
  }
  return result;
}
