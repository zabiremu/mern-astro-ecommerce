import { decode } from "jsonwebtoken";
import verifyToken from "../utilities/TokenUtility.js";

export const AuthMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["token"];
    let tokenDecode = verifyToken(token);
    if (tokenDecode === null) {
      res.status(401).json({
        status: "fail",
        message: "Unauthorized",
      });
    } else {
      req.headers.email = email;
      req.headers.user_id = user_id;
      next();
    }
  } catch (error) {
    return res.json({
      status: "fail",
      message: error.toString(),
    });
  }
};
