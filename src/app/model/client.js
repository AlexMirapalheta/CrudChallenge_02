const mongoose = require('../../database/connection');

const ClientSchema = new mongoose.Schema({
  fullname: {
    type: String,
    unique: true,
    required: true
  },
  gender: {
    type: String,
    required: true,
    uppercase: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
