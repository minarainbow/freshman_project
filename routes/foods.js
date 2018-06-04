var express = require('express');
var router = express.Router();
var food = require("../controllers/FoodController.js");

// Get all foods
router.get('/', function(req, res) {
  food.list(req, res);
});

// Get single food by id
router.get('/show/:id', function(req, res) {
  food.show(req, res);
});

// Create food
router.get('/create', function(req, res) {
  food.create(req, res);
});

// Get by Category
router.get('/beverages', function(req, res){
    food.beverages(req, res);
});
router.get('/dairy_product', function(req, res){
  food.dairy_product(req, res);
});

router.get('/vegetables', function(req, res){
  food.vegetables(req, res);
});

router.get('/fruits', function(req, res){
  food.fruits(req, res);
});

router.get('/meat', function(req, res){
  food.meat(req, res);
});




// Save food
router.post('/save', function(req, res) {
  food.save(req, res);
});

// Edit food
router.get('/edit/:id', function(req, res) {
  food.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  food.update(req, res);
});

// Edit update
router.post('/delete/:id', function(req, res, next) {
  food.delete(req, res);
});

module.exports = router;
