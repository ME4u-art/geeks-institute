import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import User from "#@/modules/users/model/index.js";

const SECRET = process.env.JWT_SECRET || "supersecret";

export const register = async ({ name, email, password, role }) => {
  const user = await User.create({ name, email, password, role });
  const token = jwt.sign({ id: user._id, role: user.role }, SECRET, { expiresIn: "1d" });
  return { user, token };
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Invalid credentials");
  const token = jwt.sign({ id: user._id, role: user.role }, SECRET, { expiresIn: "1d" });
  return { user, token };
};
