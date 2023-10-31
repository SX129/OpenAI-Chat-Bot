import { NextFunction, Response, Request } from "express";
import User from "../models/User.js";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const { message } = req.body;
    const user = await User.findById(res.locals.jwtData.id);
    
};
