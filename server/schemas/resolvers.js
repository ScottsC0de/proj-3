const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate("savedImages").select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      console.log("Logging in")
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Invalid username!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Invalid password!');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveImage: async (parent, { savedImages  }, context) => {
      console.log("SAVING IMAGE")
      if (context.user) {
        console.log("SAVING AN IMAGE")
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { ...savedImages}},
          { new: true} 
        );
        console.log(updatedUser);
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeImage: async (parent, { imageSrc }, context) => {
      console.log("REMOVING IMAGE")
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedImages: { imageSrc }}},
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;