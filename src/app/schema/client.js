const mongoose = require('mongoose');
const ageHelper = require('../../helpers/age');
const options = { toJSON: { virtuals: true } };

const ClientSchema = new mongoose.Schema(
  {
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
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  options
);

ClientSchema.virtual('age').get(function () {
  return ageHelper(this.birthdate);
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
