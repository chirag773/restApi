var express           = require('express');
var app               = express();
var bodyParser        = require('body-parser');
var mongoose          = require('mongoose');
var Books             = require("./models/books");
var books             = require("./routes/book")
var methodOverride    = require('method-override'); 



// seedDB(); terminate seeds//
mongoose.Promise = global.Promise;
var url = process.env.DATABASEURL || "mongodb://localhost/CSI"
mongoose.connect(url);app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())




//==================================================RESTFUL ROUTES=========================================================//

app.use("/api",books);




// app.listen(3000, function () {
//   console.log('Server started');
// });

app.listen(process.env.PORT,process.env.IP, function () {
  console.log('Server started');
});