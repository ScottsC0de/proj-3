import React, { useState } from 'react';
import { Link, useLocation, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('My Images');
  const location = useLocation();
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });

  const user = data?.user || {};

  
  // const thisUserName = setUsername({user.username});
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' >
        <Container fluid>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
            {location.pathname !== "/" ? <Nav.Link as={Link} to='/'>
              Home</Nav.Link> : ''}


              {/* if user is logged in show saved images and logout */}
              {Auth.loggedIn() ? (
                <>
                {location.pathname !== "/saved" ?
                  <Nav.Link as={Link} to='/saved'>
                    {/* {`${thisUserName}'s Images`} */}
                    Your Images
                  </Nav.Link> : ''}
                  {location.pathname !== "/allsaved" ?
                  <Nav.Link as={Link} to='/allsaved'>
                    Everyone's Images
                  </Nav.Link> : ''}
                  {location.pathname !== "/allusers" ?
                  <Nav.Link as={Link} to='/allusers'>
                    Images by User
                  </Nav.Link> : ''}
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
