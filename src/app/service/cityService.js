const cityRepository = require('../repository/cityRepository');

class CityService {
  async create(payload) {
    console.log('[CITY SERVICE] Create');
    try {
      const result = await cityRepository.listAll(payload);
      if (result.length !== 0) return false;
      await cityRepository.create(payload);
      return true;
    } catch (error) {
      console.log(`[CITY SERVICE] Error on Try Create City:\n${error}`);
      return false;
    }
  }

  async listAll(payload) {
    console.log('[CITY SERVICE] listAll');
    try {
      const result = await cityRepository.listAll(payload);
      return result;
    } catch (error) {
      console.log(`[CITY SERVICE] listAll Error:\n${error}`);
      throw error;
    }
  }
}

module.exports = new CityService();
