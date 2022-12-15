const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const moment = require("moment");

const date = moment();

const eventSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required."],
        trim: true,
    },
    description: {
        type: String,
        required: [true],
        trim: true,
    },
    date: {
        type: Date,
        trim: true,
    },
    materials: {
        type: String,
        trim: true,
    },
    link:{
        type: String,
        trim: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    eventPic: {
        type: String,
        default: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
    },
});

module.exports = model("Event", eventSchema);