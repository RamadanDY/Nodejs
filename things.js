const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("get the name ");
});
router.post("/", function (req, res) {
  res.send("POST route on things.");
});
module.export = router;
