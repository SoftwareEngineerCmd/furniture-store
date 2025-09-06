import { UserRoleEnum } from "./user-role.enum";

export interface UserAuthModel {
  id: number;
  username: string;
  role: UserRoleEnum;
}
