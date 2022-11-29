import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// main context.
import { MainContext } from "../contexts/mainContext";

// material-ui components.
import Stack from "@mui/material/Stack ";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function CstomAppBar() {
  const navigate = useNavigate();
  const { auth, logOut } = useContext(MainContext);
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#dfdfdf", boxShadow: "none" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ width: "100%" }}
            justifyContent="space-between"
          >
            <AdbIcon color="primary" />
            {!auth && (
              <Stack direction="row" spacing={2}>
                <Button
                  size="small"
                  color="info"
                  variant="contained"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
                <Button
                  size="small"
                  color="success"
                  variant="contained"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </Stack>
            )}
            {auth && (
              <Stack direction="row" spacing={2}>
                <Typography variant="h6" sx={{ color: "#303030" }}>
                  Atik Ullah Khan
                </Typography>
                <Button
                  variant="contained"
                  onClick={logOut}
                  color="error"
                  size="small"
                >
                  Logout
                </Button>
              </Stack>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default CstomAppBar;
