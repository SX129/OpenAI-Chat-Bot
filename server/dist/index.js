import express from "express";
import { config } from 'dotenv';
config();
//Initializing express server
const app = express();
app.use(express.json());
app.listen(5000, () => console.log("Server listening on port 5000"));
//# sourceMappingURL=index.js.map