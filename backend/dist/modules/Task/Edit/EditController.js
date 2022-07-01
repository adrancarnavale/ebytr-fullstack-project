"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditController = void 0;
const http_status_codes_1 = require("http-status-codes");
class EditController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request, response) {
        try {
            const { body: task } = request;
            const edittedTask = await this.useCase.execute(task);
            return response.status(http_status_codes_1.StatusCodes.CREATED).json(edittedTask);
        }
        catch (error) {
            return response
                .status(error.status)
                .json({ message: error.message });
        }
    }
}
exports.EditController = EditController;
//# sourceMappingURL=EditController.js.map