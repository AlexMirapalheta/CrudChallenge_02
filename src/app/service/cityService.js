cityRepository = require('../repository/cityRepository');

class cityService {
  constructor() {}

  async create(name, state) {
    try {
      if (await cityRepository.findCity(name, state)) {
        console.log('[CITY SERVICE] City Found');
        return false;
      } else {
        await cityRepository.create(name, state);
        console.log('[CITY SERVICE] City Created');
        return true;
      }
    } catch (error) {
      console.log(`[CITY SERVICE] Error on Try Create City:\n${error}`);
    }
  }

  async findByName(name) {
    try {
      console.log('[CITY SERVICE] Searching City By Name');
      return await cityRepository.findByName(name);
    } catch (error) {
      console.log(`[CITY SERVICE] Error on Try Find Cities By Name:\n${error}`);
    }
  }

  async findByState(state) {
    try {
      console.log('[CITY SERVICE] Searching City By State');
      return await cityRepository.findByState(state);
    } catch (error) {
      console.log(`[CITY SERVICE] Error on Try Find a Cities By State:\n${error}`);
    }
  }

  async findById(id) {
    try {
      console.log('[CITY SERVICE] Searching City By Id');
      return await this.cityRepository.findById(id);
    } catch (error) {
      console.log(`[CITY SERVICE] Error on Try Find City By Id:\n${error}`);
    }
  }
}

module.exports = new cityService();
