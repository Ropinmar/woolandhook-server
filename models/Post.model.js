//models/Post.model.js
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = new Schema({
        title: {
            type: String,
            required: [true, "title is required."],
            trim: true,
        },
        wovenCraft: String,
        date: {
            type: Date,
            trim: true,
        },
        text: {
            type: String,
            required: [true],
            trim: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        image: {
            type: String,
            // required: [true, "image is required."],
        },
        comments: [
            {
            type: Schema.Types.ObjectId,
            ref: "Comment"
            }
        ]
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
      }
);

const Post = model("Post", postSchema);
module.exports = Post;