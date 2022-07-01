"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = void 0;
class LoginUseCase {
    constructor(implementation) {
        this.implementation = implementation;
    }
    async execute(userInfos) {
        const userLoginResponse = await this.implementation.login(userInfos);
        return userLoginResponse;
    }
}
exports.LoginUseCase = LoginUseCase;
//# sourceMappingURL=LoginUseCase.js.map