const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});

let port = 3000;

app.listen(port);
console.log("Server is listening on "+port);