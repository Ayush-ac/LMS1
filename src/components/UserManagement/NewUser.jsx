import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

function NewUser() {
  return (
    <Box >
      <Card >
        <CardHeader 
          title="New User"
          subheader="OFFICE MANAGEMENT / NEW USER"
        />
        <CardContent>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Office Details
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}  lg={4}>
              <TextField label="Office Name" fullWidth required size="small" />
            </Grid>
            <Grid item xs={12} md={6}  lg={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Office Status</InputLabel>
                <Select size="small" label="Office Status">
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}  lg={4}>
              <TextField label="Reporting Office" fullWidth size="small" />
            </Grid>
            <Grid item xs={12} md={6}  lg={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Office Type</InputLabel>
                <Select size="small" label="Office Type" required>
                  <MenuItem value="Branch">Branch</MenuItem>
                  <MenuItem value="Head Office">Head Office</MenuItem>
                  <MenuItem value="Regional Office">Regional Office</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}  lg={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Controlling Office</InputLabel>
                <Select size="small" label="Controlling Office">
                  <MenuItem value="HQ">HQ</MenuItem>
                  <MenuItem value="Regional">Regional</MenuItem>
                  <MenuItem value="Local">Local</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}  lg={4}>
              <TextField label="Office Address" fullWidth required multiline  size="small" />
            </Grid>
            <Grid item xs={12} md={6}  lg={4}>
              <TextField label="Name Of Concern Person" fullWidth size="small" />
            </Grid>
            <Grid item xs={12} md={6}  lg={4}>
              <Box display="flex">
                <TextField
                  label="Mobile No."
                  fullWidth
                  size="small"
                  InputProps={{ startAdornment: <Typography>+91</Typography> }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}  lg={4}>
              <TextField label="Landline No." fullWidth size="small" />
            </Grid>
            <Grid item xs={12} md={6}  lg={4}>
              <TextField label="Email Id" fullWidth required size="small" />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              Submit
            </Button>
            <Button variant="contained" color="secondary">
              Close
            </Button>
          </Box>
          <Typography sx={{ mt: 2, fontSize: "0.8rem", color: "text.secondary" }}>
            ** Note: Only dash(-) and square bracket([ ])allowed in name
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default NewUser;
