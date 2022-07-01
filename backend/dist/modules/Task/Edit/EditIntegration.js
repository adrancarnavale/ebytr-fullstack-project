"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.edit = void 0;
const EditImplementation_1 = require("./EditImplementation");
const EditUseCase_1 = require("./EditUseCase");
const EditController_1 = require("./EditController");
const imp = new EditImplementation_1.EditImplementation();
const useCase = new EditUseCase_1.EditUseCase(imp);
exports.edit = new EditController_1.EditController(useCase);
//# sourceMappingURL=EditIntegration.js.map