var express = require("express"),
    config = require("./config"),
    bodyParser = require("body-parser"),
    app = express(),
    session = require("express-session"),
    cookieParser = require("cookie-parser"),
    swig = require("swig");

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));
app.use(cookieParser());
app.use(session({secret: "anything", resave: false, saveUninitialized: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view cache", false);
swig.setDefaults({cache: false});

app.locals = {
    
};

app.get("/", function(req, res) {
    res.render("template");
});

app.get("*", function(req, res, next) {
    res.redirect("/");
});

app.post("/home/", function(req, res, next) {
    res.render("partials/index");
});

app.post("/about/", function(req, res, next) {
    res.render("partials/soon");
});

app.post("/projects/", function(req, res, next) {
    res.render("partials/projects");
});

app.post("/contact/", function(req, res, next) {
    res.render("partials/soon");
});

var server = app.listen(config.app.port, function() {
    console.log("Listening on Port " + config.app.port);
});