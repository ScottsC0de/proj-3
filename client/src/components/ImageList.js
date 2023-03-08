import React from 'react';
// import {
//   Jumbotron,
//   Container,
//   CardColumimageIdArrns,
//   Card,
//   Button,
// } from "react-bootstrap";
import { Link } from 'react-router-dom';


const ImageList = ({ users, title  }) => {
 

    if (!users.length) {
    return <h3>No Saved images Yet</h3>;
  }

  return (
  
    <div>
    <h3 className="text-primary">{title}</h3>
    <div className="flex-row justify-space-between my-4">
      
      
        {users &&
          users.map((user) => (
            <div key={users._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {user.username} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {user.savedImages ? user.savedImages.length : 0}{' '}
                    image 
                    {user.savedImages && user.savedImages.length === 1 ? '' : 's'} saved
                  </span> <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {user.comments ? user.comments.length : 0}{' '}
                    comments on their album page
                    {user.comments && user.comments.length === 1 ? '' : ''}
                  </span>
                </h4>
                <Link
                  className="btn btn-block btn-squared btn-outline-info btn-light text-dark"
                  to={`/users/${user._id}`}
                >
                  View and share comments on {user.username}'s images.
                </Link>
              </div>
              </div>
          ))}
      </div>
      </div>
 
  );
};
export default ImageList;

