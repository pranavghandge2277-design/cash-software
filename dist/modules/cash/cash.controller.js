"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOpeningBalance = void 0;
const db_1 = require("../../plugins/db");
const createOpeningBalance = async (req, reply) => {
    try {
        const body = req.body;
        const { note_500 = 0, note_200 = 0, note_100 = 0, note_50 = 0, note_20 = 0, note_10 = 0, } = body;
        // 👉 आजची date
        const today = new Date().toISOString().split("T")[0];
        // 👉 Check if already exists
        const [rows] = await db_1.db.query("SELECT * FROM cash_balance WHERE date = ?", [today]);
        if (rows.length > 0) {
            return reply.status(400).send({
                message: "Opening balance already exists for today ❌",
            });
        }
        // 👉 Insert
        await db_1.db.query(`INSERT INTO cash_balance 
      (date, note_500, note_200, note_100, note_50, note_20, note_10) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`, [
            today,
            note_500,
            note_200,
            note_100,
            note_50,
            note_20,
            note_10,
        ]);
        return reply.send({
            message: "Opening balance saved successfully ✅",
        });
    }
    catch (error) {
        console.error(error);
        return reply.status(500).send({
            message: "Server error",
        });
    }
};
exports.createOpeningBalance = createOpeningBalance;
