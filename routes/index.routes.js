const express = require("express");
const router = express.Router();
//http://localhost:5005/api/
router.get("/", (req, res, next) => {
  res.json("All good in here in the server");
});

module.exports = router;
