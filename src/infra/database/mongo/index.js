const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    this.connect();
    mongoose.Promise = global.Promise;
  }

  connect() {
    return mongoose.connect(process.env.MONGO_URL, this.connectionOptions).catch((error) => console.log(error));
  }
}

module.exports = new Database().connect();
