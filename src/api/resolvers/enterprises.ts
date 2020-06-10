const entreprises = [
  {
    id: "3a555e",
    name: "Moe's Tavern",
  },
  { id: "fc8d7f", name: "Kwik-E-Mart" },
  {
    id: "1c0767",
    name: "Springfield Nuclear Power Plant",
  },
];

const enterprise = async ({ id }: { id: string }) =>
  entreprises.find((e) => e.id === id);

export { enterprise };
