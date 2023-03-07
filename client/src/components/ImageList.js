import React from 'react';
import { Card } from "react-bootstrap";

const ImageList = ({ users, title }) => {
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
                  {user.email} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {user.savedImages ? user.savedImages.length : 0}{' '}
                    images saved
                    {user.savedImages && user.savedImages.length === 1 ? '' : 's'}
                  </span>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ImageList;

