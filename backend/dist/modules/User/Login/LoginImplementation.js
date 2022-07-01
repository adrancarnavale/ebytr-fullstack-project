"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginImplementation = void 0;
const client_1 = require("@prisma/client");
const http_status_codes_1 = require("http-status-codes");
const CustomError_1 = require("../../../utils/CustomError");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generateToken_1 = require("../../../utils/token/generateToken");
const prisma = new client_1.PrismaClient();
class LoginImplementation {
    async login(userInfos) {
        const { email, password: passRequest } = userInfos;
        const foundUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!foundUser)
            throw new CustomError_1.CustomError(http_status_codes_1.StatusCodes.NOT_FOUND, 'User not found');
        const { password } = foundUser;
        const isValid = bcryptjs_1.default.compareSync(passRequest, password);
        if (!isValid)
            throw new CustomError_1.CustomError(http_status_codes_1.StatusCodes.BAD_REQUEST, 'invalid email or password');
        const token = (0, generateToken_1.generateToken)(userInfos);
        const id = foundUser.id;
        const userLoginResponse = {
            token,
            id,
        };
        return userLoginResponse;
    }
}
exports.LoginImplementation = LoginImplementation;
//# sourceMappingURL=LoginImplementation.js.map