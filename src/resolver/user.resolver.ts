export const userResolver = {
  Query: {
    users: () => [{ name: "Pranshu" }, { name: "Wesker" }],
    user: () => {
      return { name: "Pranshu" };
    },
  },
};
