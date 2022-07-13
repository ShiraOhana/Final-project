import express, { Router } from "express";
const route = express.Router();

import { register, login, updateUser } from "../controllers/authController.js";

Router.route("/register").post(register);
Router.route("/login").post(login);
Router.route("/updateUser").patch(updateUser);

export default Router;
