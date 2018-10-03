const Koa = require("koa");
const app = new Koa();
const proxy = require("./middleware/proxy");
const bodypaser = require("koa-body");
const router = require("koa-router")();
const onerror = require("koa-onerror");
const History = require("./middleware/history");
const koaStatic = require("koa-static");

//错误信息处理
onerror(app);

app.use(
	History({
		verbose: true //打出转发日志
	})
);

app.use(koaStatic(__dirname + "/dist"));

//控制台打印请求信息
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(bodypaser());

app.use(
	proxy("/api", {
		target: "https://api.now.sh"
	})
);

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || 2018);
