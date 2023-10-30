import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers.js";

//Router for user endpoints
const userRoutes = Router();

//Endpoint uses controller when requested
userRoutes.get("/", getAllUsers);

export default userRoutes;