const express = require('express');
const { getMessage } = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddleware");


const router = express.Router();

router.route("/").get(protect,getMessage);


module.exports = router;