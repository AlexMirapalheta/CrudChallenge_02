const mongoose = require('mongoose');

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect('mongodb://localhost/crudchalleng', connectionOptions).catch((error) => console.log(error));
mongoose.Promise = global.Promise;

module.exports = mongoose;
