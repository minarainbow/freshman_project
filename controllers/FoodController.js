var mongoose = require("mongoose");
var Food = require("../models/Food");

var foodController = {};

// Show list of foods
foodController.list = function(req, res) {
  Food.find({}).exec(function (err, foods) {
    if (err) {
    }
    else {
      res.render("../views/foods/index", {foods: foods});
      for (food in foods){
          console.log(food._id);
      }
    }
  });
};

// Show list of foods by category
foodController.beverages = function(req, res) {
    Food.find({category: "Beverages"}).exec(function(err, foods){
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../views/foods/beverages", {foods: foods});
            for (food in foods){
                console.log(food._id);
            }
        }
    });

};
foodController.dairy_product = function(req, res) {
    Food.find({category: "Dairy Product"}).exec(function(err, foods){
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../views/foods/dairy_product", {foods: foods});
            for (food in foods){
                console.log(food._id);
            }
        }
    });

};
foodController.vegetables = function(req, res) {
    Food.find({category: "Vegetables"}).exec(function(err, foods){
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../views/foods/vegetables", {foods: foods});
            for (food in foods){
                console.log(food._id);
            }
        }
    });

};
foodController.fruits = function(req, res) {
    Food.find({category: "Fruits"}).exec(function(err, foods){
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../views/foods/fruits", {foods: foods});
            for (food in foods){
                console.log(food._id);
            }
        }
    });

};
foodController.meat = function(req, res) {
    Food.find({category: "Meat"}).exec(function(err, foods){
        if (err) {
            console.log("Error:", err);
        }
        else {
            res.render("../views/foods/meat", {foods: foods});
            for (food in foods){
                console.log(food._id);
            }
        }
    });

};

// Show food by id
foodController.show = function(req, res) {
  Food.findOne({_id: req.params.id}).exec(function (err, food) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/foods/show", {food: food});
    }
  });
};


// Create new food
foodController.create = function(req, res) {
  res.render("../views/foods/create");
};

// Save new food
foodController.save = function(req, res) {
  var food = new Food(req.body);

  food.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/foods/create");
    } else {
      console.log("Successfully created an food.");
      res.redirect("/foods/show/"+food._id);
    }
  });
};

// Edit an food
foodController.edit = function(req, res) {
  Food.findOne({_id: req.params.id}).exec(function (err, food) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/foods/edit", {food: food});
    }
  });
};

// Update an food
foodController.update = function(req, res) {
  Food.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, buyer: req.body.buyer, category: req.body.category, price: req.body.price, expiry_date: req.body.expiry_date, memo: req.body.memo }}, { new: true }, function (err, food) {
    if (err) {
      console.log(err);
      res.render("../views/foods/edit", {food: req.body});
    }
    res.redirect("/foods/show/"+food._id);
  });
};

// Delete an food
foodController.delete = function(req, res) {
  Food.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Food deleted!");
      res.redirect("/foods");
    }
  });
};


module.exports = foodController;
