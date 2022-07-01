"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = void 0;
const DeleteImplementation_1 = require("./DeleteImplementation");
const DeleteUseCase_1 = require("./DeleteUseCase");
const DeleteController_1 = require("./DeleteController");
const imp = new DeleteImplementation_1.DeleteImplementation();
const useCase = new DeleteUseCase_1.DeleteUseCase(imp);
exports.destroy = new DeleteController_1.DeleteController(useCase);
//# sourceMappingURL=DeleteIntegration.js.map