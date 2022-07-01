"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("dotenv/config");
const { PORT } = process.env;
app_1.app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
//# sourceMappingURL=server.js.map