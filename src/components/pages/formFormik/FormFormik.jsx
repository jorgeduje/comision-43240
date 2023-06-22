import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
      repetPassword: "",
    },
    onSubmit: (datos) => {
      console.log("el formulario se envio");
      // conecto con la api
      console.log(datos);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es requerido")
        .min(3, "el campo debe tener al menos 3 caracteres"),
      email: Yup.string()
        .email("no corresponde a un email valido")
        .required("es obligatorio"),
      password: Yup.string()
        .required("requerido")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message: "la contaseña debe tener,1 mayuscula, 1 minuscula etc etc",
        }),
      repetPassword: Yup.string()
        .required("requerido")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });

  return (
    <div style={{ padding: "40px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Pass"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          label="RepetPass"
          variant="outlined"
          name="repetPassword"
          onChange={handleChange}
          error={errors.repetPassword ? true : false}
          helperText={errors.repetPassword}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormFormik;
