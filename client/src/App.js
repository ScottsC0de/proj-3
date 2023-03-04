import React from 'react';
import './App.css';
import FlickrPhotos from "./components/flickr";
import Navbar from './components/navbar';
import Gallery from './components/Gallery';
import Cloud from './components/Cloud';
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// import axios from 'axios';
import PicturePost from './components/picturePost';

function App() {
  return (
    <>
    <Navbar />
    <PicturePost />
    <Cloud />
    <Gallery />
    <FlickrPhotos />
    {/* <CloudinaryContext> */}

    {/* <Image>
        <Transformation />
        <Transformation />
    </Image>
    <Image>
        <Transformation />
    </Image>
</CloudinaryContext> */}
    </>
  )
}

export default App
