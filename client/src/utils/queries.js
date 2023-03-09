import gql from "graphql-tag";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      imageCount
      savedImages {
        imageId
        title
        caption
        src
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      imageCount
      savedImages {
        caption
        imageId
        src
        title
      }
      comments {
        _id
        commentText
        username
        createdAt
      }
    }
  }
`;

export const QUERY_ALL_IMAGES = gql`
  query allUsers {
    users {
      savedImages {
        caption
        imageId
        src
        title
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      imageCount
      savedImages {
        caption
        imageId
        src
        title
      }
      comments {
        _id
        commentText
        username
        createdAt
      }
    }
  }
`;

// export const QUERY_COMMENTS = gql`
//   query getComments {
//     comments {
//       _id
//       commentText
//       username
//       createdAt
//     }
//   }
// `;

// export const QUERY_SINGLE_COMMENT = gql`
//   query getSingleComment($commentId: ID!) {
//     comment(commentId: $commentId) {
//       _id
//       commentText
//       username
//       createdAt
//     }
//   }
// `;
