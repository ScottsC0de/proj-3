import React, { useState } from "react";
import ImageList from "../components/ImageList";
import { useQuery } from "@apollo/react-hooks";
// import { QUERY_USERS} from "../utils/queries";
import { QUERY_ALL_IMAGES } from "../utils/queries";
import LikeButton from "./LikeButton";
import Auth from "../utils/auth";
import { likedImageIds, getLikedImageIds } from "../utils/localStorage";
import { useMutation } from "@apollo/react-hooks";
import { LIKE_IMAGE } from "../utils/mutations";
import { Container, Badge, Jumbotron, Button, Card } from "react-bootstrap";
// import { QUERY_USERS} from "../utils/queries";
import UserNav from "../components/ImageAndUserNav";

// create state to hold saved imageId values
// use this page to display query/resolver of ALL saved images on DB

const AllSavedImages = () => {
  const [likedImageIds, setLikedImageIds] = useState(getLikedImageIds());
  // const { loading, data } = useQuery(QUERY_USERS);
  const { loading, data } = useQuery(QUERY_ALL_IMAGES);
  console.log("Hello", data);
  const users = data?.users || [];
  console.log("users: ", users);
  const allImages = [];
  for (let i = 0; i < users.length; i++) {
    allImages.push(users[i].savedImages);
  }
  console.log("allImages: ", allImages.flat());
  const images = allImages.flat();
  console.log("images: ", images);
  const [likeImage, { error }] = useMutation(LIKE_IMAGE);

  // create function to handle saving a image to our database
  const handleLikedImage = async (imageId) => {
    // console.log("handleLikedImage: ", likedImageIds);
    console.log("imageId: ", imageId);
    // find the image in `searchedImages` state by the matching id
    const imageToLike = images.find((photo) => photo.imageId === imageId);
    console.log("imageToLike: ", imageToLike);
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    console.log("VALIDATED LOGGING IN");
    try {
      const { data } = await likeImage({
        variables: { ...imageToLike },
      });
      console.log("RECEIVED DATA");
      // console.log(data);
      // console.log(savedImageSrcs);
      // if image successfully saves to user's account, save image id to state
      // setSavedImageSrcs([...savedImageSrcs, imageToLike.imageSrc]);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <>
      {/* <Container>
      <UserNav />
</Container> */}

      {/* <div className="flex-row justify-center">
          <div className="col-12 col-md-10 my-3"> */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        // <ImageList
        //   users={users}
        //   title="See what inspires other users..."
        // />
        <>
          <Jumbotron fluid className="text-light bg-primary">
            <Container>
              <h1>
                Everyone's saved images{" "}
                <Badge className="bg-warning text-dark">
                  {" "}
                  {images.length}{" "}
                </Badge>{" "}
              </h1>
            </Container>
          </Jumbotron>

          <Container>
            {/* <h2>
                  {images.length
                    ? `Viewing ${images.length} results:`
                    : ""}
                </h2> */}
            <div className="masonry-with-columns">
              {images.map((photo) => {
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
                    {}

                    <LikeButton
                      className="btn-block btn-danger"
                      //make this button red
                      // disabled={savedImageIds?.some(

                      // onClick={() => handleDeleteImage(photo.imageId)}
                      onClick={() => alert(`Liked ${photo.title}`)}
                      onclick={() => console.log(`Liked ${photo.title}`)}
                    >
                      Like this Image!
                    </LikeButton>
                  </Card>
                );
              })}
            </div>
          </Container>
        </>
      )}
      {/* </div>
        </div> */}
    </>
  );
};

export default AllSavedImages;
