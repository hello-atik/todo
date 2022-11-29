import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// main context.
import { MainContextProvider } from "../src/contexts/mainContext";

// react components.
import Todos from "./pages/Todos";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import MainLayout from "./layouts/MainLayout";

// material-ui custom theme.
const theme = createTheme({
  palette: {
    primary: {
      main: "#117855",
    },
    normal: {
      main: "#565656",
    },
    low: { main: "#51D688" },
    medium: { main: "#FFA500" },
    high: { main: "#F92467" },
  },
  typography: {
    fontamily: "roboto",
  },
});

const Home = () => {
  return <h1>Hello Everyone!</h1>;
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainContextProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/todos" element={<Todos />}></Route>
              <Route path="/login" element={<LogIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
          </MainLayout>
        </MainContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
