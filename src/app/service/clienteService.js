const clientRepository = require('../repository/clientRepository');

class ClientService {
  async create(payload) {
    console.log('[CLIENT SERVICE] Create');
    try {
      const result = await clientRepository.getAll(payload);
      if (result.length !== 0) return false;
      await clientRepository.create(payload);
      return true;
    } catch (error) {
      console.log(`[CLIENT SERVICE] Create Error:\n${error}`);
      throw error;
    }
  }

  async getAll(payload) {
    console.log('[CLIENT SERVICE] getAll');
    try {
      const result = await clientRepository.getAll(payload);
      return result;
    } catch (error) {
      console.log(`[CLIENT SERVICE] getAll Error:\n${error}`);
      throw error;
    }
  }

  async update(payload) {
    console.log('[CLIENT SERVICE] Update');
    try {
      const result = await clientRepository.update(payload);
      if (result !== null) return true;
      return false;
    } catch (error) {
      console.log(`[CLIENT SERVICE] Update Error:\n${error}`);
      throw error;
    }
  }
  async delete(payload) {
    console.log('[CLIENT SERVICE] Delete');
    try {
      const result = await clientRepository.delete(payload);
      if (result !== null) return true;
      return false;
    } catch (error) {
      console.log(`[CLIENT SERVICE] Delete Error:\n${error}`);
      throw error;
    }
  }
}

module.exports = new ClientService();
