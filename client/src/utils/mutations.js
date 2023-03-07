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


