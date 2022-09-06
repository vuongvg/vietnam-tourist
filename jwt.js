const jwt = require("jsonwebtoken");

const authMdw = (req, res, next) => {
    const token = req.headers.authorization;
    const jwtString = token.split(" ")[1];
    const key = process.env.MY_PRIVATE_KEY;
    jwt.verify(jwtString, key, (err, decoded) => {
        if (err) {
            res.status(401).send(err.message);
        } else {
            req.username = decoded.username;
            next();
        }
    });
};

module.exports = authMdw;