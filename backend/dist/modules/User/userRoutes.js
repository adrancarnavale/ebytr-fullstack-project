"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const RegisterIntegration_1 = require("./Register/RegisterIntegration");
const LoginIntegration_1 = require("./Login/LoginIntegration");
const registerValidation_1 = require("../../middlewares/User/Register/registerValidation");
const loginValidation_1 = require("../../middlewares/User/Login/loginValidation");
exports.userRoutes = express_1.default.Router();
exports.userRoutes
    .post('/register', registerValidation_1.registerValidation, async (request, response) => RegisterIntegration_1.register.handle(request, response))
    .post('/login', loginValidation_1.loginValidation, async (request, response) => LoginIntegration_1.login.handle(request, response));
//# sourceMappingURL=userRoutes.js.map