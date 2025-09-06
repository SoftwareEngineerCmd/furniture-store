import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { queryOperations } from "./modules/common/api/http-client";
import { snackbarConfig } from "./modules/common/configs/snackbar.config";
import { theme } from "./modules/common/theme/theme";
import { FurnitureStore } from "./modules/FurnitureStore";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryOperations}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider {...snackbarConfig}>
            <CssBaseline enableColorScheme />
            <FurnitureStore />
          </SnackbarProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
