const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().trim(),
      state: Joi.string().min(2).max(2).trim(),
    });

    const { error } = await schema.validate(req.query, { abortEarly: true });
    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
