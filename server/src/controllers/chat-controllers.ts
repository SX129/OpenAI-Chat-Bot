import { NextFunction, Response, Request } from "express";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const { message } = req.body;
};
