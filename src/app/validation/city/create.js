const Joi = require('joi');

module.exports = async (req, res, next) => {
  console.log('[VALIDATION] Create City');
  try {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required().trim().required,
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
    console.log(`[VALIDATION] Invalid Parameters To Create a New Record`);
    return res.status(400).json(error);
  }
};
