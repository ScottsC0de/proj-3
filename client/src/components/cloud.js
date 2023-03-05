<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { CloudinaryContext, Image, Video } from "cloudinary-react";
import { Cloudinary } from "@cloudinary/base";

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "dtsv4ybqe",
  },
});

const searchImages = async (query) => {
  const { resources } = await cloudinary.search().expression(query).execute();

  return resources;
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const resources = await searchImages(query);
      setResults(resources);
    };

    fetchResults();
  }, [query]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <CloudinaryContext cloudName="dtsv4ybqe">
      <div>
        <label htmlFor="search-input">Search for images:</label>
        <input
          type="text"
          id="search-input"
          value={query}
          onChange={handleQueryChange}
        />
      </div>
      <div>
        {results.map((resource) => (
          <div key={resource.public_id}>
            <Image publicId={resource.public_id} />
          </div>
        ))}
      </div>
    </CloudinaryContext>
  );
};

const cloud = () => {
=======
import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const Cloud = () => {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dtsv4ybqe",
    },
  });

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image("docs/models");

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));

  // Render the image in a React component.
>>>>>>> 2362baa89d03129ce5afb80f1aa62b33283ff73f
  return (
    <div>
      <h1>Search for Images</h1>
      <Search />
    </div>
  );
};
<<<<<<< HEAD

export default cloud;
=======
export default Cloud;
>>>>>>> 2362baa89d03129ce5afb80f1aa62b33283ff73f
