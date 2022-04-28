import { Button, Card, Container, Grid, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import DrawerLayout from "../../layout/DrawerLayout";

const SingleTransfer = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      ifce: "",
      bank: "",
      amount: "",
      mob: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name Required"),
      bank: yup.string().required("Bank Name Required"),
      amount: yup.string().required("Amount Required"),
      mob: yup.string().required("Mob Required"),
      ifce: yup
        .string()
        .required("IFC Required")
        .min(6, "Minimum six character Required")
        .max(15, "Maximum 15 Character Required"),
    }),
    onSubmit: (values, value) => {
      // value.resetForm();
      const data = {
        name: values.name,
        ifce: values.ifce,
        bank: values.bank,
        amount: values.amount,
        mob: values.mob,
      };
      console.log(data);
      axios
        .post("https://9faf-103-39-240-5.ngrok.io/singletransfer", {
          data,
        })
        .then((data) => {
          console.log("Success:", data);
          alert("Data Successfully transfer");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something Error");
        });
    },
  });
  return (
    <DrawerLayout>
      <div className="dashboardDiv flex-row ">
        <Grid container spacing={3}>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Card className="dashboardCard">
              <Container className="dashboardContainer">
                <div className="dashboardPara">
                  <p>Single transfer</p>
                </div>

                <div className="beniDiv">
                  <TextField
                    id="outlined-basic"
                    label="Beneficiary Name"
                    variant="outlined"
                    className="beniName"
                    fullWidth
                    name="name"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </div>
                <div className="beniDiv">
                  <TextField
                    id="outlined-basic"
                    label="Beneficiary IFC"
                    variant="outlined"
                    className="beniIfc"
                    fullWidth
                    name="ifce"
                    value={formik.values.ifce}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.ifce && Boolean(formik.errors.ifce)}
                    helperText={formik.touched.ifce && formik.errors.ifce}
                  />
                </div>
                <div className="beniDiv">
                  <TextField
                    id="outlined-basic"
                    label="Beneficiary Mobile No"
                    variant="outlined"
                    className="beniMob"
                    fullWidth
                    name="mob"
                    value={formik.values.mob}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.mob && Boolean(formik.errors.mob)}
                    helperText={formik.touched.mob && formik.errors.mob}
                  />
                </div>
                <div className="beniDiv">
                  <TextField
                    id="outlined-basic"
                    label="Beneficiary Bank Name"
                    variant="outlined"
                    className="beniBank"
                    fullWidth
                    name="bank"
                    value={formik.values.bank}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.bank && Boolean(formik.errors.bank)}
                    helperText={formik.touched.bank && formik.errors.bank}
                  />
                </div>
                <div className="submitBtn">
                  <Button variant="contained" onClick={formik.handleSubmit}>
                    Submit
                  </Button>
                </div>
              </Container>
            </Card>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Card className="dashboardCards">
              <div className="beniDiv">
                <TextField
                  id="outlined-basic"
                  label="Beneficiary Amount"
                  variant="outlined"
                  className="beniAmount"
                  fullWidth
                  name="amount"
                  value={formik.values.amount}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.amount && Boolean(formik.errors.amount)}
                  helperText={formik.touched.amount && formik.errors.amount}
                />
              </div>
              <div className="submitBtn">
                <Button variant="contained" onClick={formik.handleSubmit}>
                  Send
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </DrawerLayout>
  );
};

export default SingleTransfer;
