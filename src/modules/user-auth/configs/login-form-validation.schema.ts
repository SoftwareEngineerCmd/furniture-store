import { object, string } from "yup";

export const loginFormValidationSchema = object({
  username: string()
    .min(8, "Username must be at least 8 characters long")
    .required("Username is required"),
  password: string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});
