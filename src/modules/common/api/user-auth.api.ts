import { userAuthClient } from "./http-client";
import { LoginUserModel } from "../../user-auth/models/login-user.model";
import { RegisterUserModel } from "../../user-auth/models/register-user.model";
import { UserAuthModel } from "../models/user-auth.model";

export const userAuthApi = {
  loginUser(data: LoginUserModel) {
    return userAuthClient.post("/login", data);
  },
  registerUser(data: RegisterUserModel) {
    return userAuthClient.post("/register", data);
  },
  getUserAuth() {
    return userAuthClient.get<UserAuthModel>("/me");
  },
};
