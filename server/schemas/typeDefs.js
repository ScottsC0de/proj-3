const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    imageCount: Int
    savedImages: [Image]
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentText: String!
    username: String!
    createdAt: String
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

  type Query {
    me: User
    users: [User]!
    user(userId: ID!): User
    comments(username: String): [Comment]
    comment(commentId: ID!): Comment
  
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveImage(imageId: String!, title: String!, src: String, caption: String!): User
    removeImage(imageId: String!): User
    addComment(commentText: String!, username: String!): Comment
    removeComment(commentId: ID!): Comment
  }
`;

module.exports = typeDefs;