import { useMutation } from "@tanstack/react-query";
import { userAuthApi } from "../../../common/api/user-auth.api";
import { RegisterUserModel } from "../../models/register-user.model";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (data: RegisterUserModel) => userAuthApi.registerUser(data),
  });
};
