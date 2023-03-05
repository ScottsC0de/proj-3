const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedImages` array in User.js
const imageSchema = new Schema({
    title: {
    type: String,
    required: true,
  },
  // saved image id from Flickr
  imageId: {
    type: String,
    required: true,
  },
  src: {
    type: String,
  },
  caption: {
    type: String,
    required: true,
  },
});

module.exports = imageSchema;






























