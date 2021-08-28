const { AuthenticationError } = require("apollo-server-express");
const { User, Event } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      return User.find().populate("events");
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    events: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Event.find(params).populate("location").sort({ createdAt: -1 });
    },
    eventQ: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId });
    },
    eventZip: async (parent, {}) => {
      return Event.findOne({ location: location.zipCode });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("events");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (
      parent,
      { firstName, lastName, username, email, password }
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    createEvent: async (parent, { title, organizer, location }) => {
      const eventQ = await Event.create({ title, organizer, location });

      await User.findOneAndUpdate(
        { username: organizer },
        { $addToSet: { events: eventQ._id } }
      );

      return eventQ;
    },
    
    addComment: async (parent, { eventId, commentText, commentAuthor }) => {
      return Event.findOneAndUpdate(
        { _id: eventId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    deleteEvent: async (parent, { eventId }) => {
      return Event.findOneAndDelete({ _id: eventId });
    },
    removeComment: async (parent, { eventId, commentId }) => {
      return Event.findOneAndUpdate(
        { _id: eventId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
