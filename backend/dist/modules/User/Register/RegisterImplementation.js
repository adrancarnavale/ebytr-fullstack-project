"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterImplementation = void 0;
const client_1 = require("@prisma/client");
const CustomError_1 = require("../../../utils/CustomError");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const http_status_codes_1 = require("http-status-codes");
const generateToken_1 = require("../../../utils/token/generateToken");
class RegisterImplementation {
    async register(user) {
        const { firstName, lastName, email, password } = user;
        const prisma = new client_1.PrismaClient();
        var cryptedPass = bcryptjs_1.default.hashSync(password);
        await prisma.user
            .create({
            data: {
                firstName,
                lastName,
                email,
                password: cryptedPass,
            },
        })
            .catch(({ message }) => {
            if (message.includes('users_email_key'))
                throw new CustomError_1.CustomError(http_status_codes_1.StatusCodes.CONFLICT, 'User already exists');
            throw new CustomError_1.CustomError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, 'Internal server error, UserRegisterImplementation');
        })
            .finally(async () => {
            await prisma.$disconnect();
        });
        const generatedToken = (0, generateToken_1.generateToken)(user);
        return generatedToken;
    }
}
exports.RegisterImplementation = RegisterImplementation;
//# sourceMappingURL=RegisterImplementation.js.map