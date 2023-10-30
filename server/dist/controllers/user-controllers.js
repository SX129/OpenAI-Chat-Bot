import User from "../models/User.js";
import { genSalt, hash } from 'bcrypt';
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
        //Encrptying password
        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);
        console.log(hashedPassword);
        //Creating a new user and saving it to db
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map