import React from "react";
import {
  Jumbotron,
  Container,
  CardColumimageIdArrns,
  Card,
  Button,
} from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_ME } from "./queries";
import { LIKE_IMAGE } from "./mutations";
import Auth from "../utils/auth";

const LikeImages = () => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  const [likeImage] = useMutation(LIKE_IMAGE);

  const handleLikeImage = async (imageId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await likeImage({
        variables: { imageId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Liking images</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedImages?.length
            ? `Liking ${userData.savedImages.length} ${
                userData.savedImages.length === 1 ? "image" : "images"
              }:`
            : "You have no saved images"}
        </h2>
        <div className="masonry-with-columns">
          {userData.savedImages?.map((photo) => {
            return (
              <Card className="card" key={photo.imageId}>
                <Card.Img
                  key={`${photo.imageId}`}
                  src={`${photo.src}`}
                  alt={`${photo.title}`}
                  thumbnailheight={350}
                  thumbnailwidth={350}
                  caption={`${photo.title}`}
                />
                {<h4>{photo.title}</h4>}
                {
                  <Button
                    className="btn-block btn-info"
                    onClick={() => handleLikeImage(photo.imageId)}
                  >
                    Like this Image!
                  </Button>
                }
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default LikeImages;
