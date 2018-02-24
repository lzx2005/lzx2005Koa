const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:123456@localhost:3306/lzx2005');
const Blog = sequelize.define('blog', {
    blog_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    description: Sequelize.STRING,
    create_time: Sequelize.DATE,
    view: Sequelize.INTEGER,
    blog_type:Sequelize.BIGINT,
    markdown:Sequelize.BOOLEAN,
    tags:Sequelize.STRING,
    content:Sequelize.TEXT
},{
    tableName: 'blog',
    underscored: true,
    createdAt: false,
    updatedAt: false,
});

module.exports={
    Blog
};