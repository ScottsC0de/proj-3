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

export const QUERY_IMAGES = gql`
  query allUsers {
    users {
    _id
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
