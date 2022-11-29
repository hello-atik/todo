import { useState } from "react";

// material-ui components.
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack ";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

// material-ui icons.
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignUpForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm: "",
    showPassword: false,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
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
            sx={{ fontWeight: 900, mb: 1, color: "#0288d1" }}
          >
            Sign Up
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box sx={{ mb: 1.5 }}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Full Name
            </Typography>
            <TextField
              fullWidth
              id="name"
              color="info"
              size="small"
              value={values.name}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ mb: 1.5 }}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Email
            </Typography>
            <TextField
              fullWidth
              id="email"
              size="small"
              color="info"
              value={values.email}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ mb: 1.5 }}>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Password
            </Typography>
            <OutlinedInput
              fullWidth
              size="small"
              color="info"
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

          <Box>
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Confrim Password
            </Typography>
            <OutlinedInput
              fullWidth
              size="small"
              id="confrim"
              color="info"
              value={values.confrim}
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

          <Box sx={{ mt: 4 }}>
            <Button fullWidth type="submit" color="info" variant="contained">
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Box>
    </Stack>
  );
};

export default SignUpForm;
