const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }
  input bookInput{
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: bookInput!): User
    
    removeBook(bookId: String!): User
    
  }
`;

module.exports = typeDefs;
