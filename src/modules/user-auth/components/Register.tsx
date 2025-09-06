import { Button, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { RegisterFormModel } from "../models/register-form.model";
import LoginIcon from "@mui/icons-material/Login";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRegisterUser } from "../api/hooks/useRegisterUser";
import { useSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormValidationSchema } from "../configs/register-form.validation.schema";

export const Register = () => {
  const { mutate } = useRegisterUser();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { control, handleSubmit } = useForm<RegisterFormModel>({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
      retryPassword: "",
    },
    resolver: yupResolver(registerFormValidationSchema),
  });

  const onSubmit = (data: RegisterFormModel) => {
    const { password, username } = data;
    mutate(
      { password, username },
      {
        onSuccess: ({ data }) => {
          enqueueSnackbar(data.message, { variant: "success" });
          navigate("/login");
          localStorage.setItem("token", data.token);
        },
        onError: ({ message }) => {
          enqueueSnackbar(message, { variant: "error" });
        },
      }
    );
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
        boxShadow="0 4px 30px rgba(0,0,0,0.1)"
        spacing={2}
        p={2}
        maxWidth={600}
        borderRadius={2}
        width="100%"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          Register
        </Typography>

        <Controller
          control={control}
          name="username"
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

        <Controller
          control={control}
          name="retryPassword"
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Retry Password"
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
        >
          Registration
        </Button>

        <Button
          component={Link}
          to="/login"
          fullWidth
          variant="text"
          startIcon={<ArrowBackIcon fontSize="small" />}
        >
          Login
        </Button>
      </Stack>
    </Stack>
  );
};
