import React from 'react';
import { useEffect, useState } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { saveImageIds, getSavedImageIds } from '../utils/localStorage';
import { useMutation } from "@apollo/react-hooks";
import { SAVE_IMAGE } from "../utils/mutations";
import Auth from '../utils/auth';
import * as dotenv from 'dotenv' 
dotenv.config()


const SearchedImages = () => {
  // create state for holding returned google api data
  const [searchedImages, setSearchedImages] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  const [prevSearchInput, setPrevSearchInput] = useState('');

  // create state to hold saved imageId values
  const [savedImageIds, setSavedImageIds] = useState(getSavedImageIds());

  // define the save image function from the mutation
  const [saveImage, { error }] = useMutation(SAVE_IMAGE);
  // set up useEffect hook to save `savedImageIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveImageIds(savedImageIds);
  });


  // create method to search for images and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const apiKey = "8cc95ac0f29514284d94232a32a7c4c3";


    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(

        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchInput}&format=json&nojsoncallback=1`
      );

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { photos: {photo} } = await response.json();

      const imageData = photo.map((photo) => ({
        imageId: photo.id,
        title: photo.title,
        caption: photo.title,
        server: photo.server,
        secret: photo.secret
      }));

      setSearchedImages(imageData);
      setPrevSearchInput(searchInput);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a image to our database
  const handleSaveImage = async (imageId) => {
    // find the image in `searchedImages` state by the matching id
    const imageToSave = searchedImages.find((photo) => photo.imageId === imageId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveImage({
        variables: { input: { ...imageToSave } },
      });
      console.log(savedImageIds);
      // if image successfully saves to user's account, save image id to state
      setSavedImageIds([...savedImageIds, imageToSave.imageId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Images!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for an image'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

        <h2>
          {searchedImages.length
            ? `Viewing ${searchedImages.length} results for ${prevSearchInput}:`
            : 'Search for a image to begin'}
        </h2>

        <div className="masonry-with-columns">
          {searchedImages.map((photo) => (
            <div className='card' key={photo.imageId}>
            <img
              key={`${photo.imageId}`}
              src={`https://live.staticflickr.com/${photo.server}/${photo.imageId}_${photo.secret}.jpg`}
              alt={`${photo.title}`}
              thumbnailheight={350}
              thumbnailwidth={350}
              caption={`${photo.title}`}
            />
                {Auth.loggedIn() && (
                <Button
                  disabled={savedImageIds?.some((savedImageId) => savedImageId === photo.imageId)}
                  className='btn-block btn-info'
                  onClick={() => handleSaveImage(photo.imageId)}>
                  {savedImageIds?.some((savedImageId) => savedImageId === photo.imageId)
                    ? 'This image has already been saved!'
                    : 'Save this Image!'}
                </Button>
              )}
                </div>
          ))}
        </div>
    </>
  );
};
export default SearchedImages;

