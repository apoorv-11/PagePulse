import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import ConnectionDB from "./Lib/db.js";

//importing Routes:
import bookRoutes from "./Routes/book.routes.js";
import orderRoutes from "./Routes/order.Route.js";
import userRoutes from "./Routes/user.Routes.js";

dotenv.config();

//Initializing of Port and express
const PORT = process.env.PORT;
const app = express();

//Middlewares :
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

//Routes:
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on :${PORT}`);
  ConnectionDB();
});
