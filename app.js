// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");



// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

//moment
const moment = require("moment")
console.log(moment(new Date()).format("DD/MM/YYYY HH:mm"))




// 👇 Start handling routes here
//http://localhost:5005/api
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const postsRoutes = require("./routes/posts.routes")
app.use("/api", postsRoutes);

const commentsRoutes = require("./routes/comments.routes");
app.use("/api", commentsRoutes);

const eventsRoutes = require("./routes/events.routes");
app.use("/api", eventsRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
