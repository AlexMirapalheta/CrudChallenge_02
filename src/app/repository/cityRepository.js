cityModel = require('../model/city');
const clear = require('../../helpers/clear');

class CityRepository {
  async create(payload) {
    try {
      return await cityModel.create(payload);
    } catch (error) {
      console.log(`[CITY REPOSIROTY] Error on Try Create City:\n${error}`);
      throw error;
    }
  }

  async listAll(payload) {
    console.log(`[CITY REPOSIROTY] listAll`);
    try {
      clear(payload);
      return await cityModel.find(payload);
    } catch (error) {
      console.log(`[CITY REPOSIROTY] Error on Try List All Cities:\n${error}`);
      throw error;
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
