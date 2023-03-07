const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

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
  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     commentAuthor: {
  //       type: String,
  //       required: true,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],
});

// const Photo = model('Photo', imageSchema);

module.exports = imageSchema;
// module.exports = Photo;






























