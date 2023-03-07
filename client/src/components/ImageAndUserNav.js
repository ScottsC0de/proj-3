import React, { useState } from 'react';
import { Link, useLocation, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
// import AllSavedImages from "./pages/AllSavedImages";
// import UserList from "./pages/UserList";

import Auth from '../utils/auth';

const UserNav = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const location = useLocation();
  const handleSearchSubmit = (searchText) => {

  }


  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
            {location.pathname !== "/" ? <Nav.Link as={Link} to='/'>
            See Everyone's Inspiration</Nav.Link> : ''}


              {/* if user is logged in show saved images and users */}
                <>
                {location.pathname !== "/allsaved" ?
                  <Nav.Link as={Link} to='/allsaved'>
                     See Everyone's Inspiration
                  </Nav.Link> : ''}
                  {location.pathname !== "/allusers" ?
                  <Nav.Link as={Link} to='/allusers'>
                    See All Friends
                  </Nav.Link> : ''}

                </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default UserNav;