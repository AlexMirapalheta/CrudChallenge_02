const mongoose = require('../../database/connection');

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const City = mongoose.model('City', CitySchema);

module.exports = City;
