import React from 'react';
import './App.css';
import FlickrPhotos from "./components/flickr";
import Navbar from './components/navbar';
import Gallery from './components/Gallery';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';


function App() {
  return (
    <>
    <Navbar />
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
