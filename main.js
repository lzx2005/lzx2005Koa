const Koa = require('koa');
const app = new Koa();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:123456@localhost:3306/lzx2005');
const Blog = sequelize.define('blog', {
    blog_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: Sequelize.STRING,
    author: Sequelize.STRING
},{
    tableName: 'blog',
    underscored: true,
    createdAt: false,
    updatedAt: false,
});

app.use(async ctx => {
    let all = Blog.findAll();
    console.log(all);
    ctx.body = all;
});

let port = 3000;

app.listen(port);
console.log("Server is listening on "+port);