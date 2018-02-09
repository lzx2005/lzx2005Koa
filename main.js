const Koa = require('koa');
const app = new Koa();
const blogDao = require("./dao/blog-dao");
const Router = require('koa-router');
const router = new Router();

app.use(router.routes());

app.use(async ctx => {
    // let all = await blogDao.Blog.findAll();
    // ctx.body = all;
    console.log("ssss");
});

router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

let port = 3000;

app.listen(port);
console.log("Server is listening on "+port);