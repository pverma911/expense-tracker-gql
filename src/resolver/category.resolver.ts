export const categoryResolver = {
  Query: {
    categories: () => [{ name: "Shopping" }, { name: "Technology" }],
    category: () => {
      return { name: "Shopping" };
    },
  },
};
