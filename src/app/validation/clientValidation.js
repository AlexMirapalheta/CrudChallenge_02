class ClientValidation {
  async checkFullName(req, res, next) {
    console.log('[CLIENT VALIDATION] Client Full Name Validation Requested');
    return next();
  }

  async checkId(req, res, next) {
    console.log('[CLIENT VALIDATION] Client Id Validation Requested');
    return next();
  }

  async checkUpdate(req, res, next) {
    console.log('[CLIENT VALIDATION] Client Update Validation Requested');
    return next();
  }

  async checkAll(req, res, next) {
    console.log('[CLIENT VALIDATION] Client All Params Validation Requested');
    const { fullName, gender, birthdate, homeCityId } = req.body;
    // Check
    return next();
  }
}

module.exports = new ClientValidation();
