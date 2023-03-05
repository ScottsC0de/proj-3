// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
// import { render } from "react-dom";
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
// // import { render } from 'react-dom';

// // function Gallery() {
// //   const [gallery, setGallery] = useState([]);

// <<<<<<< HEAD
//   useEffect(() => {
//     async function fetchGallery() {
//       // Request for images
//       axios
//         .get("https://res.cloudinary.com/demo/image/list.json")
//         .then((res) => {
//           console.log(res.data.resources);
//           setGallery({ gallery: res.data.resources });
//         });
//     }
//     fetchGallery();
//   }, []);

//   // uploadWidget() {
//   //    // . . .
//   // }
//   return (
//     <div className="main">
//       <h1>Gallery</h1>
//       <div className="gallery">
//         <CloudinaryContext cloudName="cloud_name">
//           {gallery.map((data) => {
//             return (
//               <div className="responsive" key={data.public_id}>
//                 <div className="img">
//                   <a
//                     target="_blank"
//                     href={`https://res.cloudinary.com/demo/image/upload/${data.public_id}.jpg`}
//                   >
//                     <Image publicId={data.public_id}>
//                       <Transformation
//                         crop="scale"
//                         width="300"
//                         height="200"
//                         dpr="auto"
//                         responsive_placeholder="blank"
//                       />
//                     </Image>
//                   </a>
//                   <div className="desc">Created at {data.created_at}</div>
//                 </div>
//               </div>
//             );
//           })}
//         </CloudinaryContext>
//         <div className="clearfix"></div>
//       </div>
//     </div>
//   );
// }

// export default Gallery;
// =======

// //   useEffect(() => {
// //     async function fetchGallery() {
// //       // Request for images      
// //       const apiKey = process.env.API_KEY;
// //       const apiSecret = process.env.API_SECRET;
// //       const cloudName = process.env.CLOUD_NAME;
// //       const url = `https://${apiKey}:${apiSecret}@api.cloudinary.com/v1_1/${cloudName}/resources/image`;
// //       const response = await fetch(url);
// //       const data = await response.json();
// //       setGallery(data.images.resources);
// //       console.log(data.images.resources);
// //     };
// //     fetchGallery();
// //   }, []);

// //   return (
// //     <div>
// //       <h1>Gallery</h1>
// //       <div className="masonry-with-columns">
// //         {gallery.map((image) => (
// //           <img src ={image.url} alt={image.public_id}/>
   
              
// <<<<<<< HEAD
//         ))}
//             </div>
//             </div>
//         );
// }
//         export default Gallery;
// >>>>>>> 2362baa89d03129ce5afb80f1aa62b33283ff73f
// =======
// //         ))}
// //             </div>
// //             </div>
// //         );
// // }
// //         export default Gallery;
// >>>>>>> b936a00da00c6d71eeaa23c58f47f90e37d563e8
