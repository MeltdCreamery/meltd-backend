const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    port: process.env.PORT,
    api_url: process.env.API_URL,
    db_url: process.env.DB_URL,
};
