import { errorHandler } from "../utils/error.js";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

//Signup
export const signup = async (req, res, next) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    //Checking whether all fields are provided
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return next(errorHandler(400, "All fields are required"));
    }

    //Checking whether passwords are matching
    if (password !== confirmPassword) {
      return next(errorHandler(400, "Passwords do not match"));
    }

    //Checking whether a user exist with same username
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return next(errorHandler(400, "Username is already exist"));
    }

    // Hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //Creating a new user
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //Generate JWT
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      const { password: removePassword, ...rest } = newUser._doc;
      res.status(201).json(rest);
    } else {
      return next(errorHandler(400, "Invalida user data"));
    }
  } catch (error) {
    next(error);
  }
};

//login
export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return next(errorHandler(400, "All fields are required"));
    }
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return next(errorHandler(400, "Invalid username or password"));
    }
    generateTokenAndSetCookie(user._id, res);
    const { password: removePassword, ...rest } = user._doc;
    res.status(201).json(rest);
  } catch (error) {
    next(error);
  }
};

//logout
export const logout = (req, res, next) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};
