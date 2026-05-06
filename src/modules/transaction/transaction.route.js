import { createTransaction } from "./transaction.controller";
export default async function transactionRoutes(app) {
    app.post("/transaction", createTransaction);
}
