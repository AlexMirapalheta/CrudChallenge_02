class CityValidation {
  async checkAll(req, res, next) {
    console.log('[CITY VALIDATION] City Params Validation Requested');
    const { name, state } = req.body;

    if (!/^[a-zA-Z ]*$/.test(name))
      res.status(400).send({
        message: 'City Name is Invalid'
      });

    if (!/^[a-zA-Z]{2}$/.test(state))
      res.status(400).send({
        message: 'City State is Invalid'
      });

    return next();
  }

  async checkName(req, res, next) {
    console.log('[CITY VALIDATION] City Name Validation Requested');
    const name = req.params.name;

    if (!/^[a-zA-Z ]*$/.test(name))
      res.status(400).send({
        message: 'City Name is Invalid'
      });

    return next();
  }

  async checkState(req, res, next) {
    console.log('[CITY VALIDATION] City State Validation Requested');
    const state = req.params.state;

    if (!/^[a-zA-Z]{2}$/.test(state))
      res.status(400).send({
        message: 'City State is Invalid'
      });

    return next();
  }
}

module.exports = new CityValidation();
