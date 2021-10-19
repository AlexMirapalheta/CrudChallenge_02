const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true,
    uppercase: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const City = mongoose.model('City', CitySchema);

module.exports = City;
