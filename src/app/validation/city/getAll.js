const Joi = require('joi');

module.exports = async (req, res, next) => {
  console.log('[VALIDATION] Create City');
  try {
    const schema = Joi.object({
      _id: Joi.string().alphanum().length(24).trim(),
      name: Joi.string().trim().min(3).max(30),
      state: Joi.string()
        .pattern(/^[A-Z]+$/)
        .length(2)
        .required()
        .trim()
        .uppercase()
    });

    const { error } = await schema.validate(req.query, { abortEarly: true });
    if (error) throw error;

    return next();
  } catch (error) {
    console.log(`[VALIDATION] City Parameters Dont Validated:\n${error}`);
    return res.status(400).json(error);
  }
};
