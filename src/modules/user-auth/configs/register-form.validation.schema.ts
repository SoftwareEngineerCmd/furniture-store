import { object, ref, string } from "yup";

export const registerFormValidationSchema = object({
  username: string()
    .min(8, "Username must be at least 8 characters long")
    .required("Username is required"),
  password: string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  retryPassword: string()
    .min(8, "Password must be at least 8 characters long")
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords must match"),
});
