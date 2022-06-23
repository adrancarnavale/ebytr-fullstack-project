import Joi from 'joi';

// Min 8 characters, one lower case letter, one uppercase letter, and one number
const REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Please enter a valid email address',
    'any.required': 'Your email must not be empty',
  }),
  password: Joi.string()
    .pattern(REGEX, {
      name: 'password',
    })
    .required()
    .messages({
      'string.pattern.name':
        'Your password must have at least eight characters, one uppercase letter, and one number',
      'any.required': 'Your password must not be empty',
    }),
});
