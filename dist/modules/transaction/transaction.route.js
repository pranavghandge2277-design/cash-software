"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = transactionRoutes;
const transaction_controller_1 = require("./transaction.controller");
async function transactionRoutes(app) {
    app.post("/transaction", transaction_controller_1.createTransaction);
}
