const { db_url } = require("../config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = db_url;
db.icecreams = require("./models/icecream.model.js")(mongoose);

module.exports = db;
