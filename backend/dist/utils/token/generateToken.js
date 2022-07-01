"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const { JWT_SECRET } = process.env;
function generateToken(data) {
    const token = jsonwebtoken_1.default.sign({ data }, JWT_SECRET, { expiresIn: '365d' });
    return token;
}
exports.generateToken = generateToken;
//# sourceMappingURL=generateToken.js.map