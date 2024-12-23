
const mongoose = require('mongoose');

//creating an object fruitSchema to know what the object i'll use them down
const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
  });
  

  //register the models/
const Fruit = mongoose.model('Fruit', fruitSchema);


//export the model

module.exports = Fruit;
