const { customError } = require("../errors/customError");
const { authMdw } = require("./authMdw");

const adminMiddleware = (req, res, next) => {
   if (req.user.role === "admin") next();
   else next(customError(405, "Method Not Allowed"));
};
const adminMdw = [authMdw, adminMiddleware];

module.exports = adminMdw;
