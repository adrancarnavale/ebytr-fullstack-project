import Joi from 'joi';

// Min 8 characters, one lower case letter, one uppercase letter, and one number
const REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required().messages({
    'string.min': 'Your first name must have at least two characters',
    'string.max': 'Your first name must have at least three characters',
    'any.required': 'Your first name must not be empty',
  }),
  lastName: Joi.string().min(2).max(30).required().messages({
    'string.min': 'Your last name must have at least two characters',
    'string.max': 'Your last name must have at least three characters',
    'any.required': 'Your last name must not be empty',
  }),
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
