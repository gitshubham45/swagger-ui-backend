const express = require('express');
const { getData } = require("../controllers/dataController");
const {protect }= require("../middleware/authMiddleware");


const router = express.Router();


router.route("/").post(getData);


module.exports = router;