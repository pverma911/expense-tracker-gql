export const categoryTypeDef =`#graphql
    type Category{
        id:ID!
        name:String!
    }

    type Query{
        categories:[Category]!
        category:Category
    }
`