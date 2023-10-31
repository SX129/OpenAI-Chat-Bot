import User from "../models/User.js";
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    const user = await User.findById(res.locals.jwtData.id);
};
//# sourceMappingURL=chat-controllers.js.map