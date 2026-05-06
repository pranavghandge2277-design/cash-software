"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const path_1 = __importDefault(require("path"));
const static_1 = __importDefault(require("@fastify/static"));
const cash_route_1 = __importDefault(require("./modules/cash/cash.route"));
const transaction_route_1 = __importDefault(require("./modules/transaction/transaction.route"));
const report_route_1 = __importDefault(require("./modules/report/report.route"));
const cash_today_route_1 = __importDefault(require("./modules/cash/cash.today.route"));
const app = (0, fastify_1.default)();
// 👉 CORS
app.register(cors_1.default, {
    origin: "*"
});
// 👉 Static frontend (IMPORTANT)
app.register(static_1.default, {
    root: path_1.default.join(__dirname, '../public'),
    prefix: '/'
});
app.setNotFoundHandler((req, reply) => {
    reply.sendFile('index.html');
});
// 👉 Routes
app.register(cash_today_route_1.default);
app.register(cash_route_1.default);
app.register(transaction_route_1.default);
app.register(report_route_1.default);
// 👉 Test route
// app.get('/', async () => {
//   return { message: "Cash Management API Running 🚀" }
// })
exports.default = app;
