import React, { useState, useEffect } from "react";
function FlickrPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      const apiKey = process.env.REACT_APP_API_KEY;
      const Tags = "nature";
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${Tags}&format=json&nojsoncallback=1`;
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data.photos.photo);
      console.log(data.photos.photo);
    }
    fetchPhotos();
  }, []);

  return (
    <div>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          alt={photo.title}
        />
      ))}
    </div>
  );
}

export default FlickrPhotos;
