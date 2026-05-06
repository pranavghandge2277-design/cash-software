import { createOpeningBalance } from "./cash.controller";
import { getTodayBalance } from "./cash.get";
export default async function cashRoutes(app) {
    app.post("/opening", createOpeningBalance);
    app.get("/balance", getTodayBalance);
}
