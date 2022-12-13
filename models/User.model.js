const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
    },
    lastName: {
      type: String,
      // required: [true, "lastName is required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      trim: true,
    },
    dateOfBirth: {
      type: Date,
    },
    aboutUser: {
      type: String,
    },
    profilePic: {
      type: String,
      default: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
    },
    posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment"
      }
    ],
    events: [
      {
        type: Schema.Types.ObjectId,
        ref: "Event"
      }
    ]
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
