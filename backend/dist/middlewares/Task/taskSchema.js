"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.taskSchema = joi_1.default.object({
    id: joi_1.default.string().messages({
        'any.required': 'You must provide a valid task id',
    }),
    title: joi_1.default.string().min(3).max(36).required().messages({
        'string.min': 'Your title must have at least 3 characters',
        'string.max': 'Your title must have at most 36 characters',
        'string.empty': 'You must provide a valid title',
        'any.required': 'You must provide a valid title',
    }),
    description: joi_1.default.string().min(0).max(36).messages({
        'string.min': 'Your description must have at least 3 characters',
        'string.max': 'Your description must have at top 36 characters',
    }),
    status: joi_1.default.string()
        .valid('pending', 'in progress', 'done')
        .required()
        .messages({
        'any.only': 'You must provide a valid status',
        'any.required': 'You must provide a valid status',
    }),
});
//# sourceMappingURL=taskSchema.js.map