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
    let result = {};
    if(isNaN(ctx.params.page) || parseInt(ctx.params.page)<1){
        result.errorCode = 10000;
        result.msg = "页码输入错误";
        ctx.body = result;
        return;
    }
    if(ctx.params.page){
        page = parseInt(ctx.params.page);
    }
    let data = await blogDao.Blog.findAll({
        offset: (page-1)*pageSize ,
        limit: pageSize,
        order: [['create_time', 'DESC']]
    });

    result.data = data;
    result.info = {
        'page': page,
        'pageSize': pageSize
    };
    result.errorCode = 0;
    result.msg = "请求正常";
    ctx.body = result;
});

let port = 3000;

app.listen(port);
console.log("Server is listening on "+port);