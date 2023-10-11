export const getMenuItems = (items) =>
  items.slice(0, 3).map((coin) => ({
    title: coin.symbol,
    to: { name: "coin-detail", params: { id: coin.id } },
  }));
