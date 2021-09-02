const { AuthenticationError } = require("apollo-server-express");
const { User, Event } = require("../models");
const { signToken } = require("../utils/auth");
const mongoose = require("mongoose");
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log("test query me");
      console.log(context.user);
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("events");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    users: async (parent, args, context) => {
      return User.find().populate("events");
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    events: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Event.find(params)
        .populate("location")
        .populate("organizer")
        .sort({ createdAt: -1 });
    },
    eventDetails: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId }).populate("organizer");
    },
    eventZip: async (parent, { locationZipCode }) => {
      const params = locationZipCode ? { locationZipCode } : {};
      return Event.find(params).sort({ createdAt: -1 });
    },
    // me: async (parent, args, context) => {
    //   console.log("test in me")
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate("events");
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
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
    createEvent: async (
      parent,
      {
        title,
        organizer,
        locationName,
        locationAddress,
        locationZipCode,
        description,
        eventDate,
        eventTime,
      }
    ) => {
      const eventQ = await Event.create({
        title,
        organizer,
        locationName,
        locationAddress,
        locationZipCode,
        description,
        eventDate,
        eventTime,
      });

      const result = await Event.findOne({ _id: eventQ._id }).populate(
        "organizer"
      );

      await User.findOneAndUpdate(
        { _id: organizer },
        { $addToSet: { events: eventQ._id } }
      );

      console.log("Event", result);
      return result;
    },

    updateEvent: async (
      parent,
      {
        eventId,
        title,
        organizer,
        locationName,
        locationAddress,
        locationZipCode,
        description,
        eventDate,
        eventTime,
      },
      context
    ) => {
      return await Event.findByIdAndUpdate(
        { _id: eventId },
        {
          title,
          organizer,
          locationName,
          locationAddress,
          locationZipCode,
          description,
          eventDate,
          eventTime,
        },
        {
          new: true,
        }
      );
    },

    deleteEvent: async (parent, { eventId }, context) => {
      if (context.user) {
        return Event.findOneAndDelete({ _id: eventId });
      }

      throw new AuthenticationError("Users can only delete their own events");
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

    updateComment: async (
      parent,
      { eventId, commentId, commentText },
      context
    ) => {
      return await Event.findOneAndUpdate(
        { _id: eventId, "comments._id": commentId },
        { $set: { "comments.$.commentText": commentText } },

        { new: true }
      );
    },

    removeComment: async (parent, { eventId, commentId }, context) => {
      return Event.findOneAndUpdate(
        { _id: eventId },

        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
