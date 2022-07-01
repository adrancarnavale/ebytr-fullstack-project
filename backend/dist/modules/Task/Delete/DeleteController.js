"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteController = void 0;
const http_status_codes_1 = require("http-status-codes");
class DeleteController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request, response) {
        try {
            const { id: taskId } = request.params;
            await this.useCase.execute(taskId);
            return response.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        }
        catch (error) {
            return response
                .status(error.status)
                .json({ message: error.message });
        }
    }
}
exports.DeleteController = DeleteController;
//# sourceMappingURL=DeleteController.js.map