import React from 'react';
import './App.css';
import FlickrPhotos from "./components/flickr";
import Navbar from './components/navbar';

function App() {
  return (
    <>
    <Navbar />
    <FlickrPhotos />
    </>
  )
}

export default App
