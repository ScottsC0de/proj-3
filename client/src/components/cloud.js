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
  return (
    <div>
      <h1>Search for Images</h1>
      <Search />
    </div>
  );
};

export default cloud;
