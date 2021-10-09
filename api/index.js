const fs = require("fs");
const path = require("path");
const consola = require("consola");
const axios = require("axios");

axios.defaults.headers.post["Authorization"] =
  "94f3eee0-218f-41fc-9318-94cf5430fc7f";

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
