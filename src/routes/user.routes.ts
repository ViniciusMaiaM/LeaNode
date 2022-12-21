import { Router } from "express";
import { CreateUserController } from "../modules/users/useCase/createUser/CreateUserCaseController"
import { GetAllUsersController } from "../modules/users/useCase/getAllUsers/GetAllUsersController";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);

export {userRoutes};
