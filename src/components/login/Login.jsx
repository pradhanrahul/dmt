import { Card, Container, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// import { auth } from "../../fire";
// import { auth } from "../../config";
// import { database } from "../../config";
const data = {
  mail: "admin@gmail.com",
  password: "1234567",
};

const Login = () => {
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Email Required").email("Invalid Email"),

      password: yup
        .string()
        .required("Password Required")
        .min(6, "Minimum six character Required")
        .max(15, "Maximum 15 Character Required"),
    }),
    onSubmit: (values) => {
      if (values.email === data.mail && values.password === data.password) {
        // database.pa;
        Swal.fire({ icon: "success", text: "Product Details Is Saved " });
        navigation("/dashboard");
      } else alert("plz enter valid email");
    },
  });
  return (
    <>
      <div className="login_container">
        <Container>
          <div className="loginDiv">
            <h4 className="h4 flex-column flex-align-center ">User Login:</h4>
            <h2 className="h2 flex-column flex-align-center ">Login</h2>
          </div>
          <Card className="loginCard">
            <TextField
              id="outlined-basic"
              placeholder="Email"
              // variant="outlined"
              fullWidth
              className="loginField"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="outlined-basic"
              placeholder="Password"
              // variant="outlined"
              fullWidth
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <div className="logDiv flex-column  flex-align-center">
              <button className="loginBtn" onClick={formik.handleSubmit}>
                Log in
              </button>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Login;
