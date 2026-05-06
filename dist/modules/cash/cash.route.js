"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cashRoutes;
const cash_controller_1 = require("./cash.controller");
const cash_get_1 = require("./cash.get");
async function cashRoutes(app) {
    app.post("/opening", cash_controller_1.createOpeningBalance);
    app.get("/balance", cash_get_1.getTodayBalance);
}
