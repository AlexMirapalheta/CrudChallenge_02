const mongoose = require('../../database/connection');

const ClientSchema = new mongoose.Schema({
  fullName: {
    type: String,
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
  cityWhereLive: {
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
