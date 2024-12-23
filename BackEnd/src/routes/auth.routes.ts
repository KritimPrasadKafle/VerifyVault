import express from "express";
import { logout, login, signup } from "../controllers/auth.controller";

const authRoutes = express.Router();

authRoutes.get("/signup", signup);
authRoutes.get("/login", login);
authRoutes.get("/logout", logout);

export default authRoutes;
