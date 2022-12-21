const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const moment = require("moment");


// schema to create "Thought" model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtValue) => moment(createdAtValue).format("MMM Do YYYY [at] h:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);


// creates a virtual property reactionCount
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);


module.exports = Thought;