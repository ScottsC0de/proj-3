// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// import { render } from 'react-dom';

// function Gallery() {
//   const [gallery, setGallery] = useState([]);


//   useEffect(() => {
//     async function fetchGallery() {
//       // Request for images      
//       const apiKey = process.env.API_KEY;
//       const apiSecret = process.env.API_SECRET;
//       const cloudName = process.env.CLOUD_NAME;
//       const url = `https://${apiKey}:${apiSecret}@api.cloudinary.com/v1_1/${cloudName}/resources/image`;
//       const response = await fetch(url);
//       const data = await response.json();
//       setGallery(data.images.resources);
//       console.log(data.images.resources);
//     };
//     fetchGallery();
//   }, []);

//   return (
//     <div>
//       <h1>Gallery</h1>
//       <div className="masonry-with-columns">
//         {gallery.map((image) => (
//           <img src ={image.url} alt={image.public_id}/>
   
              
//         ))}
//             </div>
//             </div>
//         );
// }
//         export default Gallery;
