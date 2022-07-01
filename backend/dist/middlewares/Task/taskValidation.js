"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskValidation = void 0;
const http_status_codes_1 = require("http-status-codes");
const taskSchema_1 = require("./taskSchema");
function taskValidation(request, response, next) {
    const { body: task } = request;
    const { error } = taskSchema_1.taskSchema.validate(task);
    if (!error)
        return next();
    return response
        .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
        .json({ message: error.message });
}
exports.taskValidation = taskValidation;
//# sourceMappingURL=taskValidation.js.map