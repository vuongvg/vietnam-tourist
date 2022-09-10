const blogModel = require("../models/blogModel");
const BasePost = require("./BasePost");

class Blog extends BasePost {}
const blog = new Blog(blogModel);

module.exports = blog;


