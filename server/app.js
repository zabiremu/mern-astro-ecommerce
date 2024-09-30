import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import router from "./routes/Api.js";
import {
  MAX_JSON_SIZE,
  MAX_REQUEST,
  MONGO_URI,
  PORT,
  REQUEST_TIME,
  URL_ENCODED,
  WEB_CACHE,
} from "./app/config/config.js";

const app = express();

//  Middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(helmet());

const limiter = rateLimit({ windowMs: REQUEST_TIME, max: MAX_REQUEST });
app.use(limiter);

app.set("etag", WEB_CACHE);
app.use("/api", router);

mongoose.connect(MONGO_URI, { autoIndex: true }).then(() => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
