import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";
import { signupValidator, validate } from "../utils/validators.js";

//Router for user endpoints
const userRoutes = Router();

//User endpoint requests
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);

export default userRoutes;