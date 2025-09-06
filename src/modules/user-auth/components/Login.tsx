import { yupResolver } from "@hookform/resolvers/yup";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LoginIcon from "@mui/icons-material/Login";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useLoginUser } from "../api/hooks/useLoginUser";
import { loginFormValidationSchema } from "../configs/login-form-validation.schema";
import { LoginFormModel } from "../models/login-form.model";

export const Login = () => {
  const { mutate, isPending } = useLoginUser();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { control, handleSubmit } = useForm<LoginFormModel>({
    mode: "onBlur",
    defaultValues: {
      password: "",
      username: "",
    },
    resolver: yupResolver(loginFormValidationSchema),
  });

  const onSubmit = (data: LoginFormModel) => {
    mutate(data, {
      onSuccess: ({ data }) => {
        localStorage.setItem("token", data.token);
        enqueueSnackbar("User Login successfully", {
          variant: "success",
        });
        navigate("/admin-panel");
      },
      onError: ({ message }) => {
        enqueueSnackbar(message, {
          variant: "error",
        });
      },
    });
  };

  return (
    <Stack
      display="flex"
      alignItems="center"
      sx={{
        background: "#ada996",
        backgroundImage:
          "linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",
      }}
      height="100vh"
    >
      <Stack
        component="form"
        borderRadius={2}
        boxShadow="0 4px 30px rgba(0,0,0,0.1)"
        spacing={2}
        p={2}
        maxWidth={600}
        width="100%"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          Login
        </Typography>

        <Controller
          control={control}
          name="username"
          rules={{ required: "Username is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Username"
              size="small"
              fullWidth
              error={!!error}
              helperText={error?.message}
              required
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Password"
              size="small"
              type="password"
              fullWidth
              error={!!error}
              helperText={error?.message}
              required
            />
          )}
        />

        <Button
          startIcon={<LoginIcon fontSize="small" />}
          fullWidth
          type="submit"
          variant="contained"
          size="small"
          disabled={isPending}
          loading={isPending}
        >
          Login
        </Button>

        <Button
          component={Link}
          to="/register"
          fullWidth
          variant="text"
          endIcon={<ArrowForwardIcon fontSize="small" />}
        >
          Registration
        </Button>
      </Stack>
    </Stack>
  );
};
