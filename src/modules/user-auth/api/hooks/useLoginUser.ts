import { useMutation } from "@tanstack/react-query";
import { LoginUserModel } from "../../models/login-user.model";
import { userAuthApi } from "../../../common/api/user-auth.api";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (data: LoginUserModel) => userAuthApi.loginUser(data),
  });
};
