var express           = require('express');
var app               = express();
var bodyParser        = require('body-parser');
var mongoose          = require('mongoose');
// var passport          = require('passport');
// var LocalStrategy     = require('passport-local');
// var flash             = require('connect-flash');
var Books        = require("./models/books");
var books        = require("./routes/book")
// var Comment           = require("./models/comment");
// var User              = require("./models/user");
// var seedDB            = require("./seeds");
// var commentRoutes     = require("./routes/comment");
// var indexRoutes       = require("./routes/index");
var methodOverride    = require('method-override'); 
// app.use(express.static(__dirname + "/public"));
// require('dotenv').config()


// seedDB(); terminate seeds//
mongoose.connect("mongodb://localhost/restApi");
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


//================================================PASSPORT CONFIGURATION==================================================//


// app.use(require("express-session")({
//   secret:"THIS IS SECRET",
//   resave:false,
//   saveUninitialized:false
// }));


// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// /////passing "currentUser" to every template/////////////////
// app.use(function(req,res,next){
//   res.locals.currentUser = req.user;
//   res.locals.message = req.flash("error");
//   next();
// })



//==================================================RESTFUL ROUTES=========================================================//

// app.use(indexRoutes);
app.use("/api",books);
// app.use(commentRoutes);









app.listen(3000, function () {
  console.log('Server started at port 3000');
});