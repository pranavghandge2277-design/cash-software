import { FastifyInstance } from "fastify";
import { createTransaction } from "./transaction.controller";

export default async function transactionRoutes(app: FastifyInstance) {
  app.post("/transaction", createTransaction);
}