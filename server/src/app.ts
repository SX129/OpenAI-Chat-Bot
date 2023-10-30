import express from "express";
import { config } from 'dotenv';

config();

//Initializing express server
const app = express();
app.use(express.json());

export default app;