const LocationModel = require("../models/locationModel");
const BasePost = require("./BasePost");

class Location extends BasePost {}
const location = new Location(LocationModel);

module.exports = location;
