import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import FlickrPhotos from "./components/flickr";
import AppNavbar from './components/navbar';
// import Gallery from './components/Gallery';
import SavedImages from "./pages/SavedImages";
import SearchedImages from "./pages/SearchedImages";
import AllSavedImages from "./pages/AllSavedImages";
import UserList from "./pages/UserList";
import SingleUser from "./pages/SingleUser";
// import Cloud from './components/cloud';

// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// import axios from 'axios';
import PicturePost from './components/picturePost';
import {ApolloClient, ApolloProvider, InMemoryCache, createHttpLink,} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
    <AppNavbar />
    {/* <PicturePost /> */}
    {/* <FlickrPhotos /> */}
    {/* <Cloud /> */}
    {/* <Gallery /> */}
    <Routes>
            <Route path="/" element={<SearchedImages />} />
            <Route path="/saved" element={<SavedImages />} />
            <Route path="/allsaved" element={<AllSavedImages />} />
            <Route path="/allusers" element={<UserList />} />
            <Route path="/users/:userId" element={<SingleUser />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  )
}

export default App
