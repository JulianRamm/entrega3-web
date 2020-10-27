var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var locationsRouter = require("./routes/locations");
var donationsRouter = require("./routes/donations");
var reportsRouter = require("./routes/reports");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/locations", locationsRouter);
app.use("/api/donations", donationsRouter);
app.use("/api/reports", reportsRouter);

module.exports = app;
