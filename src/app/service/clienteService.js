class ClientService {
  constructor() {
    this.clientRepo = require('../repository/clientRepository');
  }

  async create() {}
}

module.exports = new ClientService();
