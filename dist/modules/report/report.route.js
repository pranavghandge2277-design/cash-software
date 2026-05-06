"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reportRoutes;
const report_controller_1 = require("./report.controller");
async function reportRoutes(app) {
    app.get("/report", report_controller_1.getDailyReport);
}
