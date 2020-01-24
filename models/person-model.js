const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 150
  },
  surname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200
  }
});

module.exports = mongoose.model("Person", personSchema);