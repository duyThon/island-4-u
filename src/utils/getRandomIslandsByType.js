export function getRandomIslandsByType(data, type, number) {
  const filtered = data.filter((item) => item.type === type);

  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }

  return filtered.slice(0, number);
}
