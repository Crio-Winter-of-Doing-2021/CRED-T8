const verifySchema = require('../middlewares/verifySchema');
const Joi = require('joi');
const profileSchema = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string(),
        authCode: Joi.string(),
        reminder: Joi.boolean(),
        phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/)
    })
    verifySchema(req, next, schema);
}

module.exports = profileSchema;