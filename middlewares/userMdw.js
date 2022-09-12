const { customError} = require("../errors/customError");
const { authMdw } = require("./authMdw");

const userMiddleware = (req, res, next) => {
   if (req.user._id===req.body.idUser) next();
   return next(customError(405, "Method Not Allowed"));
};
const userMdw = [authMdw, userMiddleware];

module.exports = userMdw;
