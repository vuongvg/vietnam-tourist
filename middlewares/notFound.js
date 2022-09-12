const { customError } = require("../errors/customError");

exports.notFoundMdw = (req, res, next) => {
   return next(customError(404, "Router does not exist"));
};
