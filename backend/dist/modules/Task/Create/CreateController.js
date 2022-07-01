"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateController = void 0;
const http_status_codes_1 = require("http-status-codes");
class CreateController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request, response) {
        try {
            const { body: task, userLoginData: { email: userEmail }, } = request;
            const createdTask = await this.useCase.execute(task, userEmail);
            return response
                .status(http_status_codes_1.StatusCodes.CREATED)
                .json({ message: createdTask });
        }
        catch (error) {
            return response
                .status(error.status)
                .json({ message: error.message });
        }
    }
}
exports.CreateController = CreateController;
//# sourceMappingURL=CreateController.js.map