import User from "../Models/user.model.js";
import jwt from "jsonwebtoken";

export const AdminLogin = async (req, res) => {
  const { userName, password } = req.body;
  try {
    if (!userName) {
      return res
        .status(401)
        .json({ message: "UserName Cant Empty", error: true });
    }
    if (!password) {
      return res
        .status(401)
        .json({ message: "Password Cant Empty", error: true });
    }

    const admin = await User.findOne({ userName });
    if (!admin) {
      return res.status(401).json({ message: "Admin not found", error: true });
    }

    if (admin.password !== password) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials", error: true });
    }

    const token = jwt.sign(
      { id: admin._id, userName: admin.userName, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Authentication Successfull",
      token: token,
      user: {
        userName: admin.userName,
        role: admin.role,
      },
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Issue", error: true });
  }
};
