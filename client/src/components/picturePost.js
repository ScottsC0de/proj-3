import React from "react";

const PicturePost = () => {
  return (
    <div className="card">
      <img alt="" src="https://picsum.photos/600/400" />
      <h3>Title of Photo</h3>
      {/* <h3>{photo.title}</h3> */}
      <p>Short description of photo and destination</p>
      {/* <p>{photo.description}</p> */}
      {/* <p>by {photo.user} on {photo.date}</p> */}
      <p>by Username on today's date</p>
    </div>
  );
};

export default PicturePost;
