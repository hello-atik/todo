// material-ui components.
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

// react components.
import AppBar from "../components/AppBar";

function MainLayout({ children }) {
  return (
    <Box>
      <CssBaseline />
      <AppBar />
      <Container sx={{ my: 4 }}>
        <Box>{children}</Box>
      </Container>
    </Box>
  );
}

export default MainLayout;
