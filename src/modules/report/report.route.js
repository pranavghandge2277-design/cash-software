import { getDailyReport } from "./report.controller";
export default async function reportRoutes(app) {
    app.get("/report", getDailyReport);
}
