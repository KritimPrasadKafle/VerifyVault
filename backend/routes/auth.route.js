import express from "express"

const authrouter = express.Router();

authrouter.get("/signup", signup);

authrouter.get("/login", login);

authrouter.get("/logout", logout);

export default authrouter;