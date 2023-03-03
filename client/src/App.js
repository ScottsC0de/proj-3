import React from 'react';
import './App.css';
import FlickrPhotos from "./components/flickr";
import Navbar from './components/navbar';
import Gallery from './components/Gallery';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

import PicturePost from './components/picturePost';

function App() {
  return (
    <>
    <Navbar />
    <PicturePost />
    <FlickrPhotos />
    <CloudinaryContext>
    <Image>
        <Transformation />
        <Transformation />
    </Image>
    <Image>
        <Transformation />
    </Image>
</CloudinaryContext>
    </>
  )
}

export default App
