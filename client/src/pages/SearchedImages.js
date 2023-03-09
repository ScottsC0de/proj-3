import React from "react";
import { useEffect, useState } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import { saveImageSrcs, getSavedImageSrcs } from "../utils/localStorage";
import { useMutation } from "@apollo/react-hooks";
import { SAVE_IMAGE } from "../utils/mutations";
import Auth from "../utils/auth";
import * as dotenv from "dotenv";
dotenv.config();

const SearchedImages = () => {
  // create state for holding returned google api data
  const [searchedImages, setSearchedImages] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");
  const [prevSearchInput, setPrevSearchInput] = useState("");

  // create state to hold saved imageId values
  const [savedImageSrcs, setSavedImageSrcs] = useState(getSavedImageSrcs());

  // define the save image function from the mutation
  const [saveImage, { error }] = useMutation(SAVE_IMAGE);
  // set up useEffect hook to save `savedImageIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveImageSrcs(savedImageSrcs);
  });

  // create method to search for images and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const apiKey = process.env.REACT_APP_API_KEY;
    const background = document.getElementById('background')
    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchInput}&format=json&nojsoncallback=1`
      );

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const {
        photos: { photo },
      } = await response.json();

      const imageData = photo.map((photo) => ({
        imageId: photo.id,
        title: photo.title,
        caption: photo.title,
        server: photo.server,
        secret: photo.secret,
        imageSrc: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
      }));

      setSearchedImages(imageData);
      setPrevSearchInput(searchInput);
      setSearchInput("");
      background.className="d-none";
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a image to our database
  const handleSaveImage = async (imageSrc) => {
    console.log("handleSaveImage: ", searchedImages);
    console.log("imageSrc: ", imageSrc);
    // find the image in `searchedImages` state by the matching id
    const imageToSave = searchedImages.find(
      (photo) => photo.imageSrc === imageSrc
    );
    console.log("imageToSave: ", imageToSave);
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    console.log("VALIDATED LOGGING IN");
    try {
      const { data } = await saveImage({
        variables: { ...imageToSave },
      });
      console.log("RECEIVED DATA");
      console.log(data);
      console.log(savedImageSrcs);
      // if image successfully saves to user's account, save image id to state
      setSavedImageSrcs([...savedImageSrcs, imageToSave.imageSrc]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Search for Images!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for an image"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>
      <div className="background" id="background">      </div>

      <Container className="white">
        <h2>
          {searchedImages.length
            ? `Viewing ${searchedImages.length} results for ${prevSearchInput}:`
            : ""}
        </h2>

        <div className="masonry-with-columns">
          {searchedImages.map((photo) => {
            return (
              <Card className="card" key={photo.imageId}>
                <Card.Img
                  key={`${photo.imageId}`}
                  src={`https://live.staticflickr.com/${photo.server}/${photo.imageId}_${photo.secret}.jpg`}
                  alt={`${photo.title}`}
                  thumbnailheight={350}
                  thumbnailwidth={350}
                  caption={`${photo.title}`}
                />
                {<h4>{photo.src}</h4>}
                {Auth.loggedIn() && (
                  <Button
                    disabled={savedImageSrcs?.some(
                      (savedImageSrc) => savedImageSrc === photo.imageSrc
                    )}
                    className="btn-block btn-info"
                    onClick={() => handleSaveImage(photo.imageSrc)}
                  >
                    {savedImageSrcs?.some(
                      (savedImageSrc) => savedImageSrc === photo.imageSrc
                    )
                      ? "This image has already been saved!"
                      : "Save this Image!"}
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
};
export default SearchedImages;
