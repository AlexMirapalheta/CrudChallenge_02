const clientRepository = require('../repository/clientRepository');

class ClientService {
  async create(payload) {
    try {
      const result = await clientRepository.getAll(payload);
      if (result.length === 0) return await clientRepository.create(payload);
      return false;
    } catch (error) {
      console.log(`[CLIENT SERVICE] Create Error:\n${error}`);
      throw error;
    }
  }

  async getAll(payload) {
    try {
      const result = await clientRepository.getAll(payload);
      return result;
    } catch (error) {
      console.log(`[CLIENT SERVICE] getAll Error:\n${error}`);
      throw error;
    }
  }

  async update(payload) {
    try {
      const result = await clientRepository.update(payload);
      if (result !== null) return result;
      return false;
    } catch (error) {
      console.log(`[CLIENT SERVICE] Update Error:\n${error}`);
      throw error;
    }
  }
  async delete(payload) {
    try {
      const result = await clientRepository.delete(payload);
      if (result !== null) return result;
      return false;
    } catch (error) {
      console.log(`[CLIENT SERVICE] Delete Error:\n${error}`);
      throw error;
    }
  }
}

module.exports = new ClientService();
