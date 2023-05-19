import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <TextField
        label="Email"
        variant="outlined"
        color="secondary"
        size="medium"
      />

      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel color="secondary" htmlFor="outlined-adornment-password">
          Contraseña
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          color="secondary"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility color="secondary" />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <Button variant="contained" color="secondary">
        Ingrear
      </Button>
    </Box>
  );
};
