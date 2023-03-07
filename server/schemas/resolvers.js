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
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // user: async (parent, { userId }) => {
    //   return User.findOne({ _id: userId }).populate("comments");
    // },
    // user: async (parent, { userId }) => {
    //   return User.findOne({ _id: userId }).populate("savedImages");
    // },
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
console.log(token)
      return { token, user };
    },
    saveImage: async (parent, args, context) => {
      console.log(args)
      if (context.user) {
        console.log("SAVING AN IMAGE")
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push:{savedImages: { ...args}}},
          { new: true} 
        );
        // console.log(updatedUser);
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeImage: async (parent, { imageId }, context) => {
      console.log("REMOVING IMAGE")
      // console.log(args);
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedImages: { imageId }}},
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  
  addComment: async (parent, { userId, comment }) => {
    return User.findOneAndUpdate(
      { _id: userId },
      {
        $addToSet: { comments: comment },
      },
      {
        new: true,
        runValidators: true,
      }
    );
  },
  removeComment: async (parent, { userId, comment }) => {
    return User.findOneAndUpdate(
      { _id: userId },
      { $pull: { comments: comment } },
      { new: true }
    );
  },
};

module.exports = resolvers;