class ClientRepository {
  constructor() {
    this.clientModel = require('../model/client');
  }
}

module.exports = new ClientRepository();
