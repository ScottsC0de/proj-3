import gql from "graphql-tag";

// mutation for logged in user
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
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
      comments {
        _id
        commentText
        username
        createdAt
      }
      }
    }
  }
`;

// mutation to add user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
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
      comments {
        _id
        commentText
        username
        createdAt
      }
      }
    }
  }
`;

export const SAVE_IMAGE = gql`
 mutation SaveImage($imageId: String!, $title: String!, $imageSrc: String, $caption: String!) {
  saveImage( imageId: $imageId, title: $title, src: $imageSrc, caption: $caption) {
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
  }
}
`;



export const REMOVE_IMAGE = gql`
  mutation removeImage($imageId: String!) {
    removeImage(imageId: $imageId) {
      _id
      username
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

export const ADD_COMMENT = gql`
  mutation addComment($userId: ID!, $commentText: String!, $username: String!) {
    addComment(userId: $userId ,commentText: $commentText, username: $username) {
      _id
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const LIKE_IMAGE = gql`
 mutation likeImage($imageId: String!) {
  likeImage( imageId: $imageId) {
    # _id
    # username
    # email
    # imageCount
    # savedImages {
    #   caption
    #   imageId
    #   src
    #   title
    # }
    likedImages{
      imageId
    }
  }
}
`;

// export const REMOVE_COMMENT = gql`
//   mutation removeComment($userId: ID!) {
//     removeComment(userId: $userId) {
//       _id
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
