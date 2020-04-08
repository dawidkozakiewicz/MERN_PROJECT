const express = require("express");
var router = express.Router();

// @route  GET api/users
// @desc   test route
// @access Public

router.get('/', (req, res) => res.send("User route"));

module.exports = router;
