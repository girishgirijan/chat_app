import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res, next) => {
  try {
    const loggedInUserId = req.user.userId;
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");;
    
    res.status(200).json(allUsers)
  } catch (error) {
    next(error);
  }
};
