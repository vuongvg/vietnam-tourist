const { customError } = require("../errors/customError");

exports.notFoundMdw = (req, res, next) => {
   return next(customError({ code: 404, message: "Router does not exist" }));
};

