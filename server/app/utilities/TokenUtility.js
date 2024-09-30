import { JWT_TOKEN, JWT_TOKEN_EXPIRE } from "../config/config.js";
import jwt from "jsonwebtoken";

export const generateAuthToken = (id, email) => {
  try {
    const tokenKey = JWT_TOKEN;
    const payload = { user_id: id, user_email: email };
    const expireToken = { expiresIn: JWT_TOKEN_EXPIRE };
    return jwt.sign(payload, tokenKey, expireToken);
  } catch (error) {
    return res.json({
      status: "fail",
      message: error,
    });
  }
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_TOKEN);
  } catch (error) {
    return res.json({
      status: "fail",
      message: error,
    });
  }
};
