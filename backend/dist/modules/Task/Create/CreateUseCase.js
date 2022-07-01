"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUseCase = void 0;
class CreateUseCase {
    constructor(implementation) {
        this.implementation = implementation;
    }
    async execute(taskInfos, userEmail) {
        const task = await this.implementation.create(taskInfos, userEmail);
        return task;
    }
}
exports.CreateUseCase = CreateUseCase;
//# sourceMappingURL=CreateUseCase.js.map