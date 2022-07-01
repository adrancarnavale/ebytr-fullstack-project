"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
const http_status_codes_1 = require("http-status-codes");
const loginSchema_1 = require("./loginSchema");
function loginValidation(request, response, next) {
    const { body: user } = request;
    const { error } = loginSchema_1.loginSchema.validate(user);
    if (!error)
        return next();
    return response
        .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
        .json({ message: error.message });
}
exports.loginValidation = loginValidation;
//# sourceMappingURL=loginValidation.js.map