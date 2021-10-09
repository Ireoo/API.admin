const path = require("path");

const router = require("express").Router();

exports = module.exports = router;

router.auth = true;
router.path = "/";

router.all("/:table/:mode", async (req, res, next) => {
  res.send({
    success: true,
    data: ""
  });
});
