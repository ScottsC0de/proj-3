const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `likedImages` array in User.js
const likedSchema = new Schema({

  imageId: {
    type: String,
    required: true,
  },
})

module.exports = likedSchema;
