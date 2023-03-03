import React from 'react';
import { useEffect, useState } from 'react';
import UploadWidget from "./UploadWidget";

function FlickrPhotos() {
  const [photos, setPhotos] = useState([]);
  
  useEffect(() => {
    async function fetchPhotos() {
      const apiKey = "8cc95ac0f29514284d94232a32a7c4c3";
      let Tags = 'nature';
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${Tags}&format=json&nojsoncallback=1`;
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data.photos.photo);
      console.log(data.photos.photo);
    }
    fetchPhotos();
  }, []);

  return (
    <div >
      <UploadWidget />
      <div className="masonry-with-columns">
        {photos.map((photo) => (
              <img
                key={photo.id}
                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt={photo.title}
                thumbnailheight={350}
                thumbnailwidth={350}
                caption={photo.title}
              />
        ))}
      </div>
    </div>
  );
}

export default FlickrPhotos;