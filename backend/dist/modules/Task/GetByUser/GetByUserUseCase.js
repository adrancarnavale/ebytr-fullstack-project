"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByUserUseCase = void 0;
class GetByUserUseCase {
    constructor(implementation) {
        this.implementation = implementation;
    }
    async execute(userId, order) {
        const tasks = await this.implementation.getByUser(userId, order);
        return tasks;
    }
}
exports.GetByUserUseCase = GetByUserUseCase;
//# sourceMappingURL=GetByUserUseCase.js.map