import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
//Router for chat endpoints. Protected API.
const chatRoutes = Router();
//Endpoints
chatRoutes.post("/new", verifyToken);
export default chatRoutes;
//# sourceMappingURL=chat-routes.js.map