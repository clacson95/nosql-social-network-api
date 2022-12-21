const { ObjectId } = require("mongoose").Types;
const { Schema, model } = require("mongoose");


// schema to create "User" model
const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
        match: /.+\@.+\..+/,
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought",
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );
  
  // creates virtual property `friendCount` that gets the amount of friends per post
  userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });
  
  // creates virtual property `thoughtCount` that gets the amount of thoughts per post
  userSchema.virtual("thoughtCount").get(function () {
    return this.thoughts.length;
  });
  
  const User = model("User", userSchema);
  

  module.exports = User;