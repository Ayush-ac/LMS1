import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardHeader,
  CardContent,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
// import { BASE_URL } from "./constants";

export default function NewLocker() {
  const [lockers, setLockers] = useState([]);
  const [showData, setShowData] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);
  const token = localStorage.getItem("jwtToken");

  const formik = useFormik({
    initialValues: {
      roomNo: "",
      rackNo: "",
      lockerType: "",
      rows: "",
      cols: "",
      start: "",
      lockerTypeId: "",
      offCd:"",
    },
    validationSchema: yup.object({}),
    onSubmit: (values, { resetForm }) => {
    //   console.log(values);
    //   const formattedValues = {
    //     lockerDTOList: lockers.map((locker) => ({
    //       offCd: "TT001",
    //       lockerNo: locker.lockerNo,
    //       lockerKey: locker.lockerKey || "KEY" + locker.lockerNo,
    //       lockerTypeId: locker.lockerType,
    //       location: locker.location,
    //       status: locker.status || "A",
    //       condition: locker.condition || "New",
    //       remarks: locker.remarks || "No remarks provided",
    //     })),
    //   };

      axios
        .post("http://192.168.11.77:8081/api/locker", formattedValues, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Data successfully submitted:", response.data);
          alert("Locker data submitted successfully!");
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
          alert(`There was an error submitting the data: ${error.message}`);
        });
      resetForm();
    },
  });

  useEffect(() => {
    const tempLockers = [];
    for (var i = 0; i < rows; i++) {
      var arr = [];
      for (var j = 0; j < cols; j++) {
        arr.push({
          lockerTypeId: lockerTypeId,
          location: `${roomNo}${rackNo}${i}${j}`,
          lockerNo: start && start - 0 + i * cols + j,
          condition: "good",
        });
      }
      tempLockers.push(arr);
    }
    setLockers(tempLockers);
    console.log("Generated lockers data:", tempLockers); // Yahan par data console mein check kar sakte hain
  }, [lockerTypeId, roomNo, offCd, rackNo, rows, cols, start, setLockers]);

  useEffect(() => {
    axios
      .get("http://192.168.11.77:8081/api/lockerType", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setLockerTypes(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching locker types:", error);
      });
  }, []);

  const toggleCondition = (rowIndex, colIndex) => {
    var tempLockers = [...lockers];
    var condition = tempLockers[rowIndex][colIndex].condition;
    if (condition === "good") condition = "not-good";
    else condition = "good";
    tempLockers[rowIndex][colIndex].condition = condition;
    setLockers(tempLockers);
  };

  const setLockerNo = (rowIndex, colIndex, lockerNo) => {
    var tempLockers = [...lockers];
    tempLockers[rowIndex][colIndex].lockerNo = lockerNo;
    setLockers(tempLockers);
  };

//   const handleSubmit = () => {
//     const postData = lockers.map((locker, index) => ({
//       id: index + 1, // Assuming each locker has an ID; use an actual unique ID if available
//       roomNo: "TTPLS", // Static company code (or modify dynamically)
//       offCd: "TT001", // Static office code (or modify dynamically)
//       lockerNo: locker.lockerNo, // Locker number from the form
//       lockerKey: locker.lockerKey, // Locker key from the form
//       lockerTypeId: locker.lockerTypeId, // Locker type ID from the form
//       location: locker.location, // Location of the locker from the form
//       status: locker.status, // Status of the locker from the form (A or O)
//       condition: locker.condition, // Condition of the locker from the form
//       remarks: locker.remarks, // Remarks from the form, if any
//     }));

//     console.log("Data being sent:", JSON.stringify({ lockers: postData }));

//     // Send the data via POST request to the API
//     axios
//       .post(
//         "http://192.168.11.77:8081/api/locker",
//         { lockers: postData }, // Directly pass the data as the second argument
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((response) => {
//         // Check if the response status indicates an error (though Axios throws for non-2xx responses)
//         if (response.status >= 400) {
//           console.error("Server error response:", response.data);
//           throw new Error(response.data.message || "Error submitting data");
//         }

//         // Parse and handle the response
//         console.log("Data successfully submitted:", response.data);

//         // Reset state after successful submission
//         setRoomNo("");
//         setRackNo("");
//         setLockerType("");
//         setRows(0);
//         setCols(0);
//         setStart("");
//         setLockers([]);
//         setShowData(false);
//         setIsFormFilled(false);
//         alert("Locker data submitted successfully!");
//       })
//       .catch((error) => {
//         // Handle errors during the request or in response processing
//         console.error("Error submitting data:", error);
//         alert(`There was an error submitting the data: ${error.message}`);
//       });
//   };

  const handleRackNoClick = () => {
    if (roomNo && rackNo && lockerTypeId) {
      setIsFormFilled(true);
      setShowData(true);
    } else {
      alert("Please fill all required fields before proceeding.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "auto",
        padding: 3,
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Typography
          variant="h5"
          align="left"
          sx={{ fontSize: "1.2rem", fontWeight: "600" }}
        >
          Create New Locker
        </Typography>
        <p
          style={{
            marginBottom: "20px",
            marginTop: "0px",
            color: "#637381",
            fontSize: "15px",
          }}
        >
          Locker Management / New Locker Entry
        </p>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <FormControl fullWidth variant="outlined" size="small">
              <TextField
                name="roomNo"
                type="number"
                variant="outlined"
                label="Room No"
                value={formik.values.roomNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.roomNo && Boolean(formik.errors.roomNo)}
                helperText={formik.touched.roomNo && formik.errors.roomNo}
                fullWidth
                size="small"
                style={{
                  backgroundColor: showData ? "#f0f0f0" : "transparent",
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControl fullWidth variant="outlined" size="small">
              <InputLabel>Select Locker Type</InputLabel>
              <Select
                label="Select Locker Type"
                name="lockerType"
                value={formik.values.lockerType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  backgroundColor: showData ? "#f0f0f0" : "transparent",
                }}
              >
                {lockerTypes.map((locker) => (
                  <MenuItem key={locker.id} value={locker.id}>
                    {locker.type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControl fullWidth variant="outlined" size="small">
              <TextField
                name="offCd"
                type="number"
                variant="outlined"
                label="Office code"
                value={formik.values.offCd}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                size="small"
                style={{
                  backgroundColor: showData ? "#f0f0f0" : "transparent",
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControl fullWidth variant="outlined" size="small">
              <TextField
                name="rackNo"
                type="number"
                variant="outlined"
                label="Rack No"
                value={formik.values.rackNo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                size="small"
                style={{
                  backgroundColor: showData ? "#f0f0f0" : "transparent",
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControl fullWidth variant="outlined" size="small">
              <TextField
                name="rows"
                type="number"
                variant="outlined"
                label="Row"
                value={formik.values.rows}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                size="small"
                style={{
                  backgroundColor: showData ? "#f0f0f0" : "transparent",
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControl fullWidth variant="outlined" size="small">
              <TextField
                name="cols"
                type="number"
                variant="outlined"
                label="Column"
                value={formik.values.cols}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                size="small"
                style={{
                  backgroundColor: showData ? "#f0f0f0" : "transparent",
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControl fullWidth variant="outlined" size="small">
              <TextField
                name="start"
                variant="outlined"
                label="Start Number"
                value={formik.values.start}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
                size="small"
                style={{
                  backgroundColor: showData ? "#f0f0f0" : "transparent",
                }}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography
            mb={2}
            variant="h5"
            align="left"
            sx={{ fontSize: "1.2rem", fontWeight: "600" }}
          >
            Account Holders
          </Typography>

          <Card sx={{ width: "100%" }}>
            <CardHeader
              title="Locker Declaration:"
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                padding: "15px",
              }}
              titleTypographyProps={{
                sx: { fontSize: "16px", fontWeight: "600" },
              }}
            />
            <CardContent>
              <TableContainer
                component={Paper}
                sx={{ mt: 2, boxShadow: "none" }}
              >
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleRackNoClick}
                  sx={{ marginBottom: 2 }}
                >
                  Locker Show - {rackNo}
                </Button>
                <Table
                  sx={{ borderCollapse: "collapse", border: "1px solid #ccc" }}
                >
                  <TableBody>
                    {showData && (
                      <TableRow>
                        {lockers.map((row, rowIndex) => (
                          <TableRow key={rowIndex}>
                            {row.map((cell, colIndex) => {
                              return (
                                <TableCell
                                  key={colIndex}
                                  sx={{
                                    border: "1px solid #ccc",
                                    padding: "8px",
                                    textAlign: "center",
                                    width: "130px",
                                    height: "69px",
                                  }}
                                >
                                  <div>
                                    <div
                                      style={{
                                        fontWeight: "bold",
                                        marginBottom: "4px",
                                        textAlign: "left",
                                        fontSize: "14px",
                                        color:
                                          lockers[rowIndex][colIndex]
                                            .condition === "good"
                                            ? "green"
                                            : "red",
                                      }}
                                      onClick={() =>
                                        toggleCondition(rowIndex, colIndex)
                                      }
                                    >
                                      {lockers[rowIndex][colIndex].location}
                                    </div>
                                    <TextField
                                      value={
                                        lockers[rowIndex][colIndex].lockerNo
                                      }
                                      onChange={(e) =>
                                        setLockerNo(
                                          rowIndex,
                                          colIndex,
                                          e.target.value
                                        )
                                      }
                                      sx={{
                                        padding: "4px",
                                        backgroundColor:
                                          lockers[rowIndex][colIndex]
                                            .condition === "good"
                                            ? "#a3a5ac"
                                            : "#80838e",

                                        borderRadius: "5px",
                                        outlineColor:
                                          lockers[rowIndex][colIndex]
                                            .condition === "good"
                                            ? "#000000"
                                            : "red",
                                        "& .MuiInputBase-root": {
                                          padding: "10px",
                                          fontWeight: "600",
                                        },
                                        "& input": {
                                          textAlign: "center",
                                          color:
                                            lockers[rowIndex][colIndex]
                                              .condition === "good"
                                              ? "#5f5f5f"
                                              : "#d0d0d0",
                                        },
                                      }}
                                    />
                                    <div></div>
                                  </div>
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        ))}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Box>

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            // onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
