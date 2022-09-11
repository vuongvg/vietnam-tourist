const tourModel = require("../models/tourModel");
const Post = require("./BasePost");

class Tour extends Post {}
const tour = new Tour(tourModel);

module.exports = tour;
