import React, { useState } from "react";
import { Link, useLocation, Route } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab, Button } from "react-bootstrap";
// import AllSavedImages from "./pages/AllSavedImages";
// import UserList from "./pages/UserList";

import Auth from "../utils/auth";

const UserNav = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  // const handleSearchSubmit = (searchText) => {};

  return (
    <div className="mx-auto">
       {/* if user is logged in show saved images and logout */}
             { ((Auth.loggedIn()) && (location.pathname === "/allsaved")) ? 
                  (<Link
                    to='/allusers'
                    className="btn btn-info btn-inline-block mx-auto"
                    // onClick={() => handleSaveImage(photo.imageSrc)}
                  >See images by user</Link>) : ('')
  }
    </div>
  );
};
export default UserNav;
