import { Router } from 'express';
import userRoutes from './user-routes.js';
import chatRoutes from './chat-routes.js';
//Initalizing express router for endpoints
const appRouter = Router();
//Creating router for "user" endpoint
appRouter.use("/user", userRoutes);
//Creating router for "user" endpoint
appRouter.use("/chat", chatRoutes);
export default appRouter;
//# sourceMappingURL=index.js.map