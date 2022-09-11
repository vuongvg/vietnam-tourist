
exports.errorHandleMdw = (err, req, res, next) => {
   if (err) {
      if (err.name === "ValidationError") {
         Object.keys(err.errors).map((name) => (err.errors[name] = err.errors[name].properties.message));
         console.log(`  ~ err.errors`, err.errors);
         res.status(400).send(err);
         return;
      }
      const stack = err.stack
         .split("\n")
         .filter((line) => !line.match(/node_modules/))
         .join("\n");
      console.log("***", err.status, err.message + "\n", stack);
      req.error = err;
      res.status(err.status).send(err.message);
   } else {
      next();
   }
};
