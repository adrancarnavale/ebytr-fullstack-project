"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUsecase = void 0;
class RegisterUsecase {
    constructor(implementation) {
        this.implementation = implementation;
    }
    async execute(user) {
        const message = await this.implementation.register(user);
        return message;
    }
}
exports.RegisterUsecase = RegisterUsecase;
//# sourceMappingURL=RegisterUsecase.js.map