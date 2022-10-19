
exports.errorHandleMdw = (err, req, res, next) => {
   if (err) {
      if (err.name === "ValidationError") {
         Object.keys(err.errors).map((name) => (err.errors[name] = err.errors[name].properties?.message || err.errors[name].reason?.message));
         console.log(`  ~ err`, err);
         res.status(400).send(err);
         return;
      }
      if (err.name === "CastError") return res.status(400).send("Invalid Id");
      if (err.name === "ReferenceError") return res.status(400).send(err.message);
      if (err.name === "MongoServerError") return res.status(400).send(err.message);

      const stack = err.stack
         .split("\n")
         .filter((line) => !line.match(/node_modules/))
         .join("\n");
      console.log("***ERROR", stack);

      // req.error = err;
      // console.log(`  ~ err`, err.name);
      res.status(err.status).send(err.message);
      return;
   } else {
      next();
   }
};
