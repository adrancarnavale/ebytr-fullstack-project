"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUser = void 0;
const GetByUserImplementation_1 = require("./GetByUserImplementation");
const GetByUserUseCase_1 = require("./GetByUserUseCase");
const GetByUserController_1 = require("./GetByUserController");
const imp = new GetByUserImplementation_1.GetByUserImplementation();
const useCase = new GetByUserUseCase_1.GetByUserUseCase(imp);
exports.getByUser = new GetByUserController_1.GetByUserController(useCase);
//# sourceMappingURL=GetByUserIntegration.js.map