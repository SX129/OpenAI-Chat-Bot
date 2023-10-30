import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";
//Router for user endpoints
const userRoutes = Router();
//User endpoint requests
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", userSignup);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map