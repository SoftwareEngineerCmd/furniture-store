import { SnackbarProviderProps } from "notistack";

export const snackbarConfig: SnackbarProviderProps = {
  maxSnack: 2,
  autoHideDuration: 1,
  anchorOrigin: {
    vertical: "top",
    horizontal: "center",
  },
};
