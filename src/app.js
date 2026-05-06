import Fastify from 'fastify';
import cashRoutes from './modules/cash/cash.route';
import transactionRoutes from './modules/transaction/transaction.route';
import reportRoutes from './modules/report/report.route';
import cors from '@fastify/cors';
import todayRoutes from "./modules/cash/cash.today.route";
const app = Fastify();
app.register(cors, {
    origin: "*"
});
app.register(todayRoutes);
app.register(cashRoutes);
app.register(transactionRoutes);
app.register(reportRoutes);
app.get('/', async (req, reply) => {
    return { message: "Cash Management API Running 🚀" };
});
export default app;
