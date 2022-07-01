"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUseCase = void 0;
class EditUseCase {
    constructor(implementation) {
        this.implementation = implementation;
    }
    async execute(taskId) {
        const edittedTask = await this.implementation.edit(taskId);
        return edittedTask;
    }
}
exports.EditUseCase = EditUseCase;
//# sourceMappingURL=EditUseCase.js.map