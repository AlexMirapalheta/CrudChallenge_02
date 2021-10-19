const ClientSchema = require('../schema/client');
const Repository = require('./repository');
class ClientRepository extends Repository {
  constructor() {
    super(ClientSchema);
  }

  async getAll(payload) {
    return super.getAll(payload, 'city');
  }
}

module.exports = new ClientRepository();
