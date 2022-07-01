"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByUserController = void 0;
const http_status_codes_1 = require("http-status-codes");
class GetByUserController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request, response) {
        try {
            const { id: userId } = request.params;
            const { order } = request.query;
            const tasks = await this.useCase.execute(userId, order);
            return response.status(http_status_codes_1.StatusCodes.OK).json(tasks);
        }
        catch (error) {
            return response
                .status(error.status)
                .json(error.message);
        }
    }
}
exports.GetByUserController = GetByUserController;
//# sourceMappingURL=GetByUserController.js.map