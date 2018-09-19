var express    = require('express');
var router     = express.Router();   
var Books = require("../models/books");

//============================================================campground get route================================================//

router.get("/Books",function(req, res){
//   getting info from db
  Books.find({},function(err, books){
    if(err){
      console.log(err);
    }else{
      res.json(books);
    }
  });  
});

//post routes

router.post("/Books",function(req, res){
	var title = req.body.title;
	var description = req.body.description;
	var image = req.body.image;
	var author = req.body.author;
	var pages = req.body.pages;
	var publish = req.body.publish;
	var price = req.body.price;
	var newBooks = { 
		title:title,
		description:description,
		image:image,
		pages:pages,
		publish:publish,
		author:author,
		price:price
	}
  Books.create(newBooks,function(err,books){
  	if(err){
  		console.log(err)
  	}else{
  		books.save();
       res.json(books);
  	}
      });
});


//edit route


router.put("/Books/:id", function(req, res){
  Books.findByIdAndUpdate(req.params.id, req.body ,function(err,updateBooks){
     if(err){
    console.log(err)
} else{
  res.json(updateBooks);
  console.log(updateBooks)
  }
   });
});


// //=============================================================delete route================================================//

router.delete("/Books/:id",function(req,res){
  Books.findByIdAndRemove(req.params.id, function(err,deleted){
     if(err){
    console.log(err)
} else{
  res.send("deleted");
  console.log(deleted)
  }
   });
});

module.exports = router;