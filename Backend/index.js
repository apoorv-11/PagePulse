import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import ConnectionDB from "./src/Lib/db.js";

//importing Routes:
import bookRoutes from "./src/Routes/book.routes.js";
import orderRoutes from "./src/Routes/order.Route.js";
import userRoutes from "./src/Routes/user.Routes.js";
import adminRoutes from "./src/Routes/admin.Routes.js";

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
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on :${PORT}`);
  ConnectionDB();
});
