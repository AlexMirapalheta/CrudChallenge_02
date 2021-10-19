const CitySchema = require('../schema/city');
const Repository = require('./repository');

class CityRepository extends Repository {
  constructor() {
    super(CitySchema);
  }
  async listAll(payload) {
    return super.getAll(payload);
  }
}

module.exports = new CityRepository();
