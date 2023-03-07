const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    imageCount: Int
    savedImages: [Image]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Image {
    imageId: String
    caption: String
    title: String
    src: String
  }
  # input ImageInput {
  #   imageId: String
  #   title: String
  #   caption: String
  #   src: String
  # }

  type Query {
    me: User
    users: [User]!
    user(userId: ID!): User
  
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveImage(imageId: String!, title: String!, src: String, caption: String!): User
    removeImage(imageId: String!): User
    # addComment(userId: ID!, comment: String!): User
    # removeComment(userId: ID!, comment: String!): User
  }
`;

module.exports = typeDefs;