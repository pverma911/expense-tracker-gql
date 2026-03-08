export const userTypeDef = `#graphql
  type User {
    name: String!
  }
  type Query {
    users: [User]
    user: User
  }
`;
