import express from "express";
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from "./routes/index.js";
config();
//Initializing express server
const app = express();
app.use(express.json());
//Middlewares for dev stage
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map