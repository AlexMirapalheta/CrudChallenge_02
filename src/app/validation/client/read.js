const Joi = require('joi');

module.exports = async (req, res, next) => {
  console.log('[VALIDATION] Read Client');
  try {
    const schema = Joi.object({
      _id: Joi.string().alphanum().length(24).trim(),
      fullname: Joi.string().min(2).max(50).trim(),
      gender: Joi.string().length(1).uppercase().trim(),
      birthdate: Joi.date().less('now'),
      city: Joi.string().alphanum().length(24).trim()
    });

    const { error } = await schema.validate(req.query, { abortEarly: true });
    if (error) throw error;

    return next();
  } catch (error) {
    console.log(`[VALIDATION] Client Parameters Dont Validated:\n${error}`);
    return res.status(400).json(error);
  }
};
