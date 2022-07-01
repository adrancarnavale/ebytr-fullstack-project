"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const http_status_codes_1 = require("http-status-codes");
class LoginController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request, response) {
        try {
            const { body: userInfos } = request;
            const userLoginResponse = await this.useCase.execute(userInfos);
            return response.status(http_status_codes_1.StatusCodes.OK).json(userLoginResponse);
        }
        catch (error) {
            return response
                .status(error.status)
                .json({ message: error.message });
        }
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=LoginController.js.map