import React from 'react';
import './App.css';
import FlickrPhotos from "./components/flickr";
import Navbar from './components/navbar';
import PicturePost from './components/picturePost';

function App() {
  return (
    <>
    <Navbar />
    <PicturePost />
    <FlickrPhotos />
    </>
  )
}

export default App
