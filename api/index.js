const fs = require("fs");
const path = require("path");
const consola = require("consola");

const router = require("express").Router();

exports = module.exports = router;

router.auth = true;
router.path = "/";

router.all("/:table/:mode", async (req, res, next) => {
  consola.info(req.data);
  res.send({
    success: true,
    data: ""
  });
});
