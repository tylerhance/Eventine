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
  locationName: {
          type: String,
          required: false,
          trim: true,
  },
  locationAddress: {
          type: String,
          required: false,
          trim: true,
  },
  locationZipCode: {
          type: Number,
          required: false,
          trim: true,
  },
  organizer: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  eventDate: {
    type: Date,
    required: false,
    trim: true, 
  },
  eventTime: {
    type: Date,
    required: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  attendeesCount: {
    type: Number,
    required: false,
    trim: true,
    default: 0,
 },
  comments: [

    {
      commentText: {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: false,
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