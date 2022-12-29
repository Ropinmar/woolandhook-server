const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const moment = require("moment");

const date = moment();

const eventSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required."],
        trim: true,
        minLength: 3
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

// // Conocer los procedimientos para cada dinámica de los distintos juegos
// dentro del casino (black Jack, ruleta, punto y banca, torneo de póker,
//     póker winner, póker Texas holdem y mesa libre.), tener excelente 
//     atención al cliente, realizar cuentasmatemáticas con rapidez y 
// exactitud para que se garantice el desarrollo
//     del juego, tener siempre una buena presentación personal, estar
//     dispuesto a ayudar.
//     // 