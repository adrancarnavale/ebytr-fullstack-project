"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Min 8 characters, one lower case letter, one uppercase letter, and one number
const REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
exports.registerSchema = joi_1.default.object({
    firstName: joi_1.default.string().min(2).max(30).required().messages({
        'string.min': 'Your first name must have at least two characters',
        'string.max': 'Your first name must have at least three characters',
        'any.required': 'Your first name must not be empty',
        'string.empty': 'Your first name must not be empty',
    }),
    lastName: joi_1.default.string().min(2).max(30).required().messages({
        'string.min': 'Your last name must have at least two characters',
        'string.max': 'Your last name must have at least three characters',
        'any.required': 'Your last name must not be empty',
        'string.empty': 'Your last name must not be empty',
    }),
    email: joi_1.default.string().email().required().messages({
        'string.email': 'Please enter a valid email address',
        'any.required': 'Your email must not be empty',
        'string.empty': 'Your email must not be empty',
    }),
    password: joi_1.default.string()
        .pattern(REGEX, {
        name: 'password',
    })
        .required()
        .messages({
        'string.pattern.name': 'Your password must have at least eight characters, one uppercase letter, and one number',
        'any.required': 'Your password must not be empty',
        'string.empty': 'Your password must not be empty',
    }),
});
//# sourceMappingURL=registerSchema.js.map