cityModel = require('../model/city');
const clear = require('../../helpers/clear')

class CityRepository {

  async listAll(payload) {
    clear(payload)
    return await cityModel.find(payload);
  }

  async create(name, state) {
    try {
      return await cityModel.create({ name, state });
    } catch (error) {
      console.log(`[CITY REPOSIROTY] Error on Try Create City:\n${error}`);
    }
  }

  async getById(id) {
    try {
      return await cityModel.findById(id);
    } catch (error) {
      console.log(`[CITY REPOSIROTY] Error on Try Find a City By Id:\n${error}`);
    }
  }
}

module.exports = new CityRepository();
