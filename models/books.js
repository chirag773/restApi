var mongoose = require('mongoose');

// ///////////////////////////////schema setup///////////////////////////////////////////

var bookSchema = new mongoose.Schema({
  title:{
  	type:String,
  	required:true
  },
  description:{
  	type:String,
  	required:true
  },
  image:{
  	type:String,
  	// required:true
  },
  author:{
  	type:String,
  	// required:true
  },
  publish:{
  	type:String,
  	// required:true
  },
  pages:{
  	type:String,
  	// required:true
  },
  price:{
  	type:String,
  	// required:true
  },
  
});

module.exports = mongoose.model("Books", bookSchema);