"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidation = void 0;
const http_status_codes_1 = require("http-status-codes");
const verifyToken_1 = require("../../utils/token/verifyToken");
function tokenValidation(request, response, next) {
    try {
        const { headers: { authorization: token }, } = request;
        if (!token)
            return response
                .status(http_status_codes_1.StatusCodes.NOT_FOUND)
                .json({ message: 'Token not found' });
        const { data: { email, password }, } = (0, verifyToken_1.verifyToken)(token);
        request.userLoginData = {
            email,
            password,
        };
        return next();
    }
    catch (error) {
        return response
            .status(http_status_codes_1.StatusCodes.UNAUTHORIZED)
            .json({ message: 'Invalid or expired token' });
    }
}
exports.tokenValidation = tokenValidation;
//# sourceMappingURL=tokenValidation.js.map