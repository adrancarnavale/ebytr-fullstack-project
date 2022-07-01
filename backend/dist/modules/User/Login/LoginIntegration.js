"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const LoginImplementation_1 = require("./LoginImplementation");
const LoginUseCase_1 = require("./LoginUseCase");
const LoginController_1 = require("./LoginController");
const imp = new LoginImplementation_1.LoginImplementation();
const useCase = new LoginUseCase_1.LoginUseCase(imp);
exports.login = new LoginController_1.LoginController(useCase);
//# sourceMappingURL=LoginIntegration.js.map