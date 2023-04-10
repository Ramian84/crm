const express = require("express");
const app = express();
const routes = require('./index.route');
app.use('/', routes);
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});