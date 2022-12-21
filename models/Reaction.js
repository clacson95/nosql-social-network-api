const { Schema, Types } = require('mongoose');
const moment = require('moment');


// schema to create "Reaction" model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // use "getter" method to format the timestamp on query
      get: createdAtValue => moment(createdAtValue).format("MMM Do YYYY [at] h:mm a"),
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);


module.exports = reactionSchema;