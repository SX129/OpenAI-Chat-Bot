import User from "../models/User.js";
import { genSalt, hash, compare } from 'bcrypt';
//GET request function for all users
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//POST request function for signup
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        //Validation check for existing user by email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).send("User already registered.");
        }
        //Encrptying password
        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);
        //Creating a new user and saving it to db
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(201).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//POST request function for login
export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        //Validation check for existing user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("User not registered.");
        }
        //Validation check for password
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect password.");
        }
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map