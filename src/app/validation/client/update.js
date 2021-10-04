const Joi = require('joi');

module.exports = async (req, res, next) => {
  console.log('[VALIDATION] Update Client');
  try {
    const schema = Joi.object({
      _id: Joi.string().alphanum().length(24).trim().required(),
      fullname: Joi.string().min(2).max(50).trim().required()
    });

    const { error } = await schema.validate(req.query, { abortEarly: true });
    if (error) throw error;

    return next();
  } catch (error) {
    console.log(`[VALIDATION] City Parameters Dont Validated:\n${error}`);
    return res.status(400).json(error);
  }
};
