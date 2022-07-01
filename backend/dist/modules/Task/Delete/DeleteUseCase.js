"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUseCase = void 0;
class DeleteUseCase {
    constructor(implementation) {
        this.implementation = implementation;
    }
    async execute(taskId) {
        await this.implementation.delete(taskId);
        return;
    }
}
exports.DeleteUseCase = DeleteUseCase;
//# sourceMappingURL=DeleteUseCase.js.map