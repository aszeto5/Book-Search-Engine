const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  type Auth {
    token: ID
    user: User
  }
  input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;