const users = [
  {
    id: "3a555e",
    name: "Marge",
    email: "marge@simpson.com",
    enterprises: [],
  },
  { id: "fc8d7f", name: "Omer", email: "omer@simpson.com", enterprises: [] },
  { id: "1c0767", name: "Bart", email: "bart@simpson.com" },
  { id: "055d22", name: "lisa", email: "lisa@simpson.com" },
  { id: "ec666c", name: "Maggie", email: "maggie@simpson.com" },
];

const user = async ({ id }: { id: string }) => users.find((e) => e.id === id);

export { user };
