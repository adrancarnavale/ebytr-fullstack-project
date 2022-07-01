"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const RegisterImplementation_1 = require("./RegisterImplementation");
const RegisterUsecase_1 = require("./RegisterUsecase");
const RegisterController_1 = require("./RegisterController");
const imp = new RegisterImplementation_1.RegisterImplementation();
const useCase = new RegisterUsecase_1.RegisterUsecase(imp);
exports.register = new RegisterController_1.RegisterController(useCase);
//# sourceMappingURL=RegisterIntegration.js.map