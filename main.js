const Koa = require('koa');
const app = new Koa();
const blogDao = require("./dao/blog-dao");

app.use(async ctx => {
    let all = await blogDao.Blog.findAll();
    ctx.body = all;
});

let port = 3000;

app.listen(port);
console.log("Server is listening on "+port);