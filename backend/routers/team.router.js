const express = require("express");
const router = express.Router();
const teammember = require("../controllers/team.member.js");

// POST route to register users
router.post("/register", teammember.registerMembers);
router.get("/members", teammember.getMembers);

module.exports = router;
