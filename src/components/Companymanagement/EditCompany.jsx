import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

function CreateCompanyForm() {
  const token = localStorage.getItem("jwtToken");
  const [loading, setloading] = useState("");

  // Formik setup
  const formik = useFormik({
    initialValues: {
      cmpCd: "",
      cmpName: "",
      cmpAdd: "",
      city: "",
      state: "",
      website: "",
      cmpLogo: "",
      email: "",
      phn1: "",
      phn2: "",
      faxNo: "",
      status: "T",
      offName: "",
      offType: "HO",
      offAddress: "",
      ctlCd: "HO001",
      officeEmail: "",
      phoneNo: "",
      contactPerson: "",
      workingStatus: "RWO",
      auPassword: "",
      nuPassword: "",
    },
    validationSchema: Yup.object({
        cmpCd: Yup.string().min(2, "Company Code must be at least 2 characters long"),
        cmpName: Yup.string(),
        cmpAdd: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
        email: Yup.string().email("Invalid email format"),
        phn1: Yup.string().matches(/^[0-9]{10}$/, "Invalid phone number"),
        phn2: Yup.string().matches(/^[0-9]{10}$/, "Invalid phone number"),
        faxNo: Yup.string().matches(/^\d{10}$/, "Fax no. should be exactly 10 digits and should not include any letters"),
        offName: Yup.string(),
        offAddress: Yup.string(),
        officeEmail: Yup.string().email("Invalid email format"),
        phoneNo: Yup.string().matches(/^[0-9]{10}$/, "Invalid phone number"),
        contactPerson: Yup.string(),
        auPassword: Yup.string(),
        nuPassword: Yup.string(),
      }),
      
    onSubmit: (values, { resetForm }) => {
      // console.log(values)
      setloading(true);

      const formattedValues = {
        cmpCd: values.cmpCd,
        cmpName: values.cmpName,
        cmpAdd: values.cmpAdd,
        city: values.city,
        state: values.state,
        website: values.website,
        cmpLogo: values.cmpLogo,
        email: values.email,
        phn1: values.phn1,
        phn2: values.phn2,
        faxNo: values.faxNo,
        status: values.status,
        office_info: {
          offName: values.offName,
          offType: values.offType,
          offAddress: values.offAddress,
          ctlCd: values.ctlCd,
          email: values.officeEmail,
          phoneNo: values.phoneNo,
          contactPerson: values.contactPerson,
          workingStatus: values.workingStatus,
          auPassword: values.auPassword,
          nuPassword: values.nuPassword,
        },
      };

      axios
        .post("http://192.168.11.77:8081/api/company", formattedValues, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            const responseData = response.data;
            // const message = responseData.message || 'Company created successfully!';
            const formatted = `
                  <table border="1">
                    <tr>
                      <th>User</th>
                      <th>User ID</th>
                      <th>Password</th>
                      <th>Admin</th>
                    </tr>
                    <tr>
                      <td>Authorized User</td>
                      <td>HE001A</td>
                      <td>9rmY#YSIJA_@</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Normal User</td>
                      <td>HE001N</td>
                      <td>#0ecWhk$mhezu</td>
                      <td>Yes</td>
                    </tr>
                  </table>

        `;

            Swal.fire({
              title: "Success!",
              html: formatted,
              icon: "success",
              confirmButtonText: "OK",
            });

            resetForm();
          }
        })
        .catch((error) => {
          if (error.response) {
            if (
              error.response.data.message &&
              error.response.data.message.includes("cmpCd already exists")
            ) {
              Swal.fire({
                title: "Error!",
                text: "Company code already exists. Please use a different code.",
                icon: "warning",
                confirmButtonText: "OK",
              });
            }
            // if (error.response) {
            //   // Extract relevant error information
            //   const errorCode = error.response.status || "N/A";
            //   const errorMessage = JSON.stringify(error.response.data);

            //   // Format the content using divs and spans for a sleek, compact layout
            //   const formattedError = `
            //     <div style="padding: 10px; border-left: 4px solid #f27474; background-color: #f8d7da; color: #721c24;">
            //       <strong>Error Code:</strong> <span>${errorCode}</span><br>
            //       <strong>Message:</strong> <span>${errorMessage}</span>
            //     </div>
            //   `;

            //   Swal.fire({
            //     title: "Error Details",
            //     html: formattedError,
            //     icon: "error",
            //     confirmButtonText: "OK",
            //   });
            // } 
            else {
              Swal.fire({
                title: "Error!",
                text: "Failed to create company. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          } else {
            Swal.fire({
              title: "Error!",
              text: "An unexpected error occurred. Please check your network and try again.",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
        })
        .finally(function () {
          setloading(false);
        });
    },
  });

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Card >
          <CardHeader
            title="Edit Company"
            subheader="OFFICE MANAGEMENT / Edit COMPANY"
          />
          <CardContent>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Company Details
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Company Code"
                  fullWidth
                  size="small"
                  name="cmpCd"
                  value={formik.values.cmpCd}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.cmpCd && Boolean(formik.errors.cmpCd)}
                  helperText={formik.touched.cmpCd && formik.errors.cmpCd}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Company Name"
                  fullWidth
                  size="small"
                  name="cmpName"
                  value={formik.values.cmpName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.cmpName && Boolean(formik.errors.cmpName)
                  }
                  helperText={formik.touched.cmpName && formik.errors.cmpName}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Company Address"
                  fullWidth
                  size="small"
                  name="cmpAdd"
                  value={formik.values.cmpAdd}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.cmpAdd && Boolean(formik.errors.cmpAdd)}
                  helperText={formik.touched.cmpAdd && formik.errors.cmpAdd}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="City"
                  fullWidth
                  size="small"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="State"
                  fullWidth
                  size="small"
                  name="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Website"
                  fullWidth
                  size="small"
                  name="website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Email Id"
                  fullWidth
                  size="small"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Primary Phone No."
                  fullWidth
                  size="small"
                  name="phn1"
                  value={formik.values.phn1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phn1 && Boolean(formik.errors.phn1)}
                  helperText={formik.touched.phn1 && formik.errors.phn1}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Secondary Phone No."
                  fullWidth
                  size="small"
                  name="phn2"
                  value={formik.values.phn2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phn2 && Boolean(formik.errors.phn2)}
                  helperText={formik.touched.phn2 && formik.errors.phn2}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Fax No."
                  fullWidth
                  size="small"
                  name="faxNo"
                  value={formik.values.faxNo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.faxNo && Boolean(formik.errors.faxNo)}
                  helperText={formik.touched.faxNo && formik.errors.faxNo}
                />
              </Grid>
            </Grid>

            <Typography variant="subtitle1" sx={{ mt: 3, mb: 2 }}>
              Head Office Details
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Office Name"
                  fullWidth
                  size="small"
                  name="offName"
                  value={formik.values.offName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.offName && Boolean(formik.errors.offName)
                  }
                  helperText={formik.touched.offName && formik.errors.offName}
                  
                />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Office Type"
                  fullWidth
                  size="small"
                  name="offType"
                  value={formik.values.offType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.offType && Boolean(formik.errors.offType)}
                  helperText={formik.touched.offType && formik.errors.offType}
                  
                />
              </Grid> */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Office Address"
                  fullWidth
                  size="small"
                  name="offAddress"
                  value={formik.values.offAddress}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.offAddress &&
                    Boolean(formik.errors.offAddress)
                  }
                  helperText={
                    formik.touched.offAddress && formik.errors.offAddress
                  }
                  
                />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Control Code"
                  fullWidth
                  size="small"
                  name="ctlCd"
                  value={formik.values.ctlCd}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.ctlCd && Boolean(formik.errors.ctlCd)}
                  helperText={formik.touched.ctlCd && formik.errors.ctlCd}
                  
                />
              </Grid> */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Office Email"
                  fullWidth
                  size="small"
                  name="officeEmail"
                  value={formik.values.officeEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.officeEmail &&
                    Boolean(formik.errors.officeEmail)
                  }
                  helperText={
                    formik.touched.officeEmail && formik.errors.officeEmail
                  }
                  
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Office Phone Number"
                  fullWidth
                  size="small"
                  name="phoneNo"
                  value={formik.values.phoneNo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phoneNo && Boolean(formik.errors.phoneNo)
                  }
                  helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Contact Person"
                  fullWidth
                  size="small"
                  name="contactPerson"
                  value={formik.values.contactPerson}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.contactPerson &&
                    Boolean(formik.errors.contactPerson)
                  }
                  helperText={
                    formik.touched.contactPerson && formik.errors.contactPerson
                  }
                />
              </Grid>
              {/* <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Working Status"
                  fullWidth
                  size="small"
                  name="workingStatus"
                  value={formik.values.workingStatus}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.workingStatus && Boolean(formik.errors.workingStatus)}
                  helperText={formik.touched.workingStatus && formik.errors.workingStatus}
                  
                />
              </Grid> */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Authorized Password"
                  fullWidth
                  size="small"
                  name="auPassword"
                  value={formik.values.auPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.auPassword &&
                    Boolean(formik.errors.auPassword)
                  }
                  helperText={
                    formik.touched.auPassword && formik.errors.auPassword
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Normal User Password"
                  fullWidth
                  size="small"
                  name="nuPassword"
                  value={formik.values.nuPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.nuPassword &&
                    Boolean(formik.errors.nuPassword)
                  }
                  helperText={
                    formik.touched.nuPassword && formik.errors.nuPassword
                  }
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mr: 2 }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "submit"
                )}
              </Button>
              {/* <Button variant="contained" color="secondary">
                Close
              </Button> */}
            </Box>
            <Typography
              sx={{ mt: 2, fontSize: "0.8rem", color: "text.secondary" }}
            >
              ** Note: Use Country Code, Area Code & Number in Fax & Phone
              Field.
            </Typography>
          </CardContent>
        </Card>
      </form>
    </Box>
  );
}

export default CreateCompanyForm;
