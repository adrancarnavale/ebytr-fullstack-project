"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRoutes = void 0;
const express_1 = __importDefault(require("express"));
const taskValidation_1 = require("../../middlewares/Task/taskValidation");
const tokenValidation_1 = require("../../middlewares/Token/tokenValidation");
const CreateIntegration_1 = require("./Create/CreateIntegration");
const GetByUserIntegration_1 = require("./GetByUser/GetByUserIntegration");
const EditIntegration_1 = require("./Edit/EditIntegration");
const DeleteIntegration_1 = require("./Delete/DeleteIntegration");
exports.taskRoutes = express_1.default.Router();
exports.taskRoutes
    .get('/getAll/:id', tokenValidation_1.tokenValidation, async (request, response) => GetByUserIntegration_1.getByUser.handle(request, response))
    .post('/create', tokenValidation_1.tokenValidation, taskValidation_1.taskValidation, async (request, response) => CreateIntegration_1.create.handle(request, response))
    .patch('/edit', tokenValidation_1.tokenValidation, taskValidation_1.taskValidation, async (request, response) => EditIntegration_1.edit.handle(request, response))
    .delete('/destroy/:id', tokenValidation_1.tokenValidation, async (request, response) => DeleteIntegration_1.destroy.handle(request, response));
//# sourceMappingURL=taskRoutes.js.map