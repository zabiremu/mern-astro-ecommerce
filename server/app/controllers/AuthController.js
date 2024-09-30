import bcrypt from "bcrypt";
import UserModel from "../models/UserModel.js";
import { generateAuthToken } from "../utilities/TokenUtility.js";
export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.json({
        status: "fail",
        message: "Invalid email or password",
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.json({
        status: "fail",
        message: "Invalid email or password ",
      });
    }

    // Generate JWT
    const token = generateAuthToken(user._id, user.email);
    user.password = undefined;
    return res.json({
      status: "success",
      message: "Logged in successfully",
      data: {
        token: token,
        user: user,
      },
    });
  } catch (error) {
    return res.json({
      status: "fail",
      message: error,
    });
  }
};

export const register = async (req, res) => {
  try {
    let reqBody = req.body;
    const saltRounds = 10;
    const password = await bcrypt.hash(reqBody.password, saltRounds);
    reqBody.password = password;
    const user = new UserModel(reqBody);
    await user.save();
    return res.json({
      status: "success",
      message: "Registration completed successfully",
    });
  } catch (error) {
    return res.json({
      status: "fail",
      message: error,
    });
  }
};
