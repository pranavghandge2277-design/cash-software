import { FastifyInstance } from "fastify";
import { db } from "../../plugins/db";

export default async function todayRoutes(app: FastifyInstance) {

    app.get("/transactions/today", async (req, reply) => {
        try {

            const [rows]: any = await db.query(`
        SELECT 
          id,
          customer_name,
          type,
          created_at,

          (note_500*500 +
           note_200*200 +
           note_100*100 +
           note_50*50 +
           note_20*20 +
           note_10*10) AS amount

        FROM transactions
        WHERE DATE(created_at) = CURDATE()
        ORDER BY created_at DESC
        LIMIT 20
      `);

            return reply.send({
                success: true,
                transactions: rows,
            });

        } catch (err) {
            console.log(err);
            return reply.status(500).send({
                success: false,
                message: "Error fetching transactions",
            });
        }
    });

}