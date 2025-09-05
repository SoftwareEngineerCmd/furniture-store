import { ThemeProvider } from "@mui/material";
import "./App.css";
import { Furniture } from "./modules/furniture/Furniture";
import { theme } from "./modules/common/theme/theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Furniture />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
