"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const http_status_codes_1 = require("http-status-codes");
class RegisterController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request, response) {
        try {
            const { body: user } = request;
            const token = await this.useCase.execute(user);
            return response.status(http_status_codes_1.StatusCodes.CREATED).json({ token });
        }
        catch (error) {
            return response
                .status(error.status)
                .json({ message: error.message });
        }
    }
}
exports.RegisterController = RegisterController;
//# sourceMappingURL=RegisterController.js.map