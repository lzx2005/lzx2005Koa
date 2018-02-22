const Koa = require('koa');
const app = new Koa();
const blogDao = require("./dao/blog-dao");
const Router = require('koa-router');
const router = new Router();

app.use(router.routes());

app.use(async ctx => {
    let all = await blogDao.Blog.findAll();
    ctx.body = all;
});

router.get('/hello/:name', async (ctx, next) => {
    let name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/blogs/:page', async (ctx, next) => {
    let pageSize = 10;
    let page = 1;
    if(ctx.params.page){
        page = parseInt(ctx.params.page);
    }
    let data = await blogDao.Blog.findAll({
        offset: (page-1)*pageSize ,
        limit: pageSize,
        order: [['create_time', 'DESC']]
    });

    let result = {};
    result.data = data;
    result.info = {
        'page': page,
        'pageSize': pageSize
    };
    ctx.body = result;
});

let port = 3000;

app.listen(port);
console.log("Server is listening on "+port);