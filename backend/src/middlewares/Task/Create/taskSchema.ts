import Joi from 'joi';

export const taskSchema = Joi.object({
  title: Joi.string().min(3).max(36).required().messages({
    'string.min': 'Your title must have at least 3 characters',
    'string.max': 'Your title must have at most 36 characters',
    'any.required': 'You must provide a valid title',
  }),
  description: Joi.string().min(3).max(36).messages({
    'string.min': 'Your description must have at least 3 characters',
    'string.max': 'Your description must have at top 36 characters',
  }),
  status: Joi.string()
    .valid('pending', 'in progress', 'done')
    .required()
    .messages({
      'any.only': 'You must provide a valid status',
      'any.required': 'You must provide a valid status',
    }),
});
