const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema({
  title: {
        type: String,
        required: 'Please enter a title for your event!',
        minlength: 1,
        maxlength: 280,
        trim: true,
      },
  location: [ {
      name: {
          type: String,
          required: true,
          trim: true,
      },
      address: {
          type: String,
          required: true,
          trim: true,
      },
      zipCode: {
          type: Integer,
          required: true,
          trim: true,
      }
  }
 ],
  organizer: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  attendeesCount: {
    type: Integer,
    required: true,
    trim: true,
 },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Event = model('Event', eventSchema);

module.exports = Event;