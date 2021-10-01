cityModel = require('../model/city');

class CityRepository {
  constructor() {}

  async create(name, state) {
    try {
      return await cityModel.create({ name: name, state: state });
    } catch (error) {
      console.log(`[CITY REPOSIROTY] Error on Try Create City:\n${error}`);
    }
  }

  async findCity(name, state) {
    try {
      return await cityModel.findOne({ name: name, state: state });
    } catch (error) {
      console.log(`[CITY REPOSIROTY] Error on Try Find a City:\n${error}`);
    }
  }

  async findByName(name) {
    try {
      return await cityModel.find({ name: name });
    } catch (error) {
      console.log(`[CITY REPOSIROTY] Error on Try Find a City By Name:\n${error}`);
    }
  }

  async findByState(state) {
    try {
      return await cityModel.find({ state: state.toUpperCase() });
    } catch (error) {
      console.log(`[CITY REPOSIROTY] Error on Try Find a City By State:\n${error}`);
    }
  }

  async findById(id) {
    try {
      return await cityModel.findById(id);
    } catch (error) {
      console.log(`[CITY REPOSIROTY] Error on Try Find a City By Id:\n${error}`);
    }
  }
}

module.exports = new CityRepository();
