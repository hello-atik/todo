import { useState, useContext } from "react";

// main context.
import { MainContext } from "../contexts/mainContext";

// material-ui components.
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack ";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";

// material-ui icons.
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const { logIn } = useContext(MainContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.id]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ width: "100%" }}
      justifyContent="center"
    >
      <Box sx={{ width: 350, mt: 5 }}>
        <Paper elevation={3} sx={{ px: 4, py: 5 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 900, mb: 1, color: "#117855" }}
          >
            Login
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box sx={{ mb: 1.5 }}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Email
            </Typography>
            <TextField
              fullWidth
              id="email"
              size="small"
              value={values.email}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ mb: 0.5 }}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Password
            </Typography>
            <OutlinedInput
              fullWidth
              size="small"
              id="password"
              value={values.password}
              onChange={handleChange}
              type={values.showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    size="small"
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? (
                      <VisibilityOff fontSize="small" />
                    ) : (
                      <Visibility fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>

          <FormControlLabel
            control={<Checkbox />}
            onChange={handleChange}
            label="Remember me"
          />

          <Box sx={{ mt: 3 }}>
            <Button fullWidth type="submit" onClick={logIn} variant="contained">
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </Stack>
  );
};

export default LoginForm;
