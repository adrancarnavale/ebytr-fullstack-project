"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const CreateImplementation_1 = require("./CreateImplementation");
const CreateUseCase_1 = require("./CreateUseCase");
const CreateController_1 = require("./CreateController");
const imp = new CreateImplementation_1.CreateImplementation();
const useCase = new CreateUseCase_1.CreateUseCase(imp);
exports.create = new CreateController_1.CreateController(useCase);
//# sourceMappingURL=CreateIntegration.js.map