"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = void 0;
const http_status_codes_1 = require("http-status-codes");
const registerSchema_1 = require("./registerSchema");
function registerValidation(request, response, next) {
    const { body: user } = request;
    const { error } = registerSchema_1.registerSchema.validate(user);
    if (!error)
        return next();
    return response
        .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
        .json({ message: error.message });
}
exports.registerValidation = registerValidation;
//# sourceMappingURL=registerValidation.js.map