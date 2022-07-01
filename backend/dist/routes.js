"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./modules/User/userRoutes");
const taskRoutes_1 = require("./modules/Task/taskRoutes");
exports.routes = express_1.default.Router();
exports.routes.use('/user', userRoutes_1.userRoutes);
exports.routes.use('/task', taskRoutes_1.taskRoutes);
//# sourceMappingURL=routes.js.map