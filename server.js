const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const consola = require("consola");
const morgan = require("morgan");
const compression = require("compression");

/**
 * 显示访问信息
 */
app.use(
  morgan(
    '[:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms'
  )
);

/**
 * 添加gzip
 */
app.use(compression());

// static
app.use(express.static(path.join(process.cwd(), "dist")));

/**
 * 获取数据流并保存在 req.data 里面
 */
app.use((req, res, next) => {
  let reqData = [];
  let size = 0;
  req.on("data", data => {
    reqData.push(data);
    size += data.length;
  });
  req.on("end", () => {
    try {
      req.data = JSON.parse(
        Buffer.concat(reqData, size).toString() === ""
          ? "{}"
          : Buffer.concat(reqData, size).toString()
      );
      next();
    } catch (error) {
      res.send({
        success: false,
        message: `提交的数据格式错误,请提交json格式的文本`,
        data: Buffer.concat(reqData, size).toString
      });
      // req.data = {};
      // next();
    }
  });
});

/**
 * 路由规则
 */
app.use("/api", require("./api/index"));

// Listen the server
const server = http.listen(
  process.env.PORT || 2019,
  process.env.HOST || "localhost",
  () => {
    consola.ready({
      message: `Server listening on http://${server.address().address}:${
        server.address().port
      }`,
      badge: true
    });
  }
);
