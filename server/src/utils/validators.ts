import { error, log } from "console";
import { NextFunction, Response, Request } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

//Validator function for user/chat routes using middleware checks
export const validate = (validations: ValidationChain[]) => {
    return async (req:Request, res:Response, next: NextFunction) => {
        for (let validation of validations){
            const result = await validation.run(req);
            if(!result.isEmpty()){
                break;
            }
        };
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        return res.status(422).json({errors: errors.array()});
    };
};

//User login validation check
export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required."),
    body("password").trim().isLength({min: 6}).withMessage("Password should contain atleast 6 characters."),
];

//User signup validation check
export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required."),
    ...loginValidator,
];

//Chat message validation check
export const chatCompletionValidator = [
    body("message").notEmpty().withMessage("Message is required."),
];