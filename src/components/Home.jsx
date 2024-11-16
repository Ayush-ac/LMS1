import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import React from "react";
import Chart from 'react-apexcharts';
import { Warning, Report, CheckCircle } from "@mui/icons-material";
import locker1 from "../assets/locker1.png"; // Import your logo image
import locker2 from "../assets/locker2.png"; // Import your logo image
import locker3 from "../assets/locker3.png"; // Import your logo image
import locker4 from "../assets/locker4.png"; // Import your logo image
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line 
} from "recharts";

export default function Home() {
  
  const weeklyMonthlyData = [
    { name: "Week 1", accidents: 15 },
    { name: "Week 2", accidents: 12 },
    { name: "Week 3", accidents: 18 },
    { name: "Week 4", accidents: 20 },
  ];

  const accidentTypeData = [
    { name: "Insignificant", count: 5 },
    { name: "Major", count: 8 },
    { name: "Minor", count: 10 },
    { name: "Fatal", count: 2 },
    { name: "Injured", count: 7 },
    { name: "Death", count: 1 },
  ];

  const zoneWiseData = [
    { zone: "North", accidents: 20 },
    { zone: "South", accidents: 15 },
    { zone: "East", accidents: 25 },
    { zone: "West", accidents: 10 },
  ];

  const busTypeData = [
    { busType: "Non-A.C. Low Floor DTC Buses", accidents: 30 },
    { busType: "A.C. Low Floor DTC Buses", accidents: 25 },
    { busType: "Electric Low Floor A.C. DTC Buses", accidents: 10 },
  ];

  return (
    <>
      <Grid container spacing={2}>
        {/* Total Accidents Card */}
        <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                borderRadius: 5,
                background: "linear-gradient(45deg, #e6ebff 30%, #ffffff 90%)",
                color: "#fff",
                boxShadow: "inset 0 0 7px 7px rgba(154, 161, 171, 0.14)", // Updated box-shadow
                border: "1px solid #d7dbda", // Added border
                padding: 2,
              }}
            >
              <CardContent sx={{ padding: "5px 0px 8px 0px!important" }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  {/* Left Side Content */}
                  <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px", color: "#000000", fontFamily: 'Poppins, sans-serif' }}>
                    Allocated Lockers
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                      <Box
                        component="span"
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: "#51ce8a",
                          border: "1px solid #cdcdcd", // Added border
                          display: "inline-block",
                          marginRight: 1.2,
                        }}
                  
                      />
                       <Typography variant="body2" sx={{ fontWeight:500, fontSize: "1.25rem", color: "#000" }}>
                            5/29
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: "1rem", color: "#000", marginTop: 1,fontWeight:"600" }}>
                        More info
                    </Typography>
                  </Box>

                  {/* Right Side Icon */}
                    <Box
                  sx={{
                    backgroundColor: "#437af9", // Background color for the image container
                    padding: 1.1  , // Padding around the image
                    borderRadius: 2, // Border radius for rounded corners
                    display: 'flex', // Ensure flexbox alignment if needed
                    justifyContent: 'center', // Center image horizontally
                    alignItems: 'center', // Center image vertically
                  }}
                  >
                        <img
                          src={locker1} // Use the imported Logo
                          alt="Company Logo"
                          style={{
                            width: "25px", // Set width of the locker image
                            height: "25px", // Set height of the locker image
                            filter: "invert(1) brightness(10)", // Invert the image colors and increase brightness
                          }}
                        />
                      </Box>
                
                </Box>
              </CardContent>
            </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                borderRadius: 5,
                background: "linear-gradient(45deg, #f7e9ff 30%, #ffffff 90%)",
                color: "#fff",
                boxShadow: "inset 0 0 7px 7px rgba(154, 161, 171, 0.14)", // Updated box-shadow
                border: "1px solid #d7dbda", // Added border
                padding: 2,
              }}
            >
              <CardContent sx={{ padding: "5px 0px 8px 0px!important" }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  {/* Left Side Content */}
                  <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: "16px", color: "#000000", fontFamily: 'Poppins, sans-serif' }}>
                    Unallocated Lockers
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                      <Box
                        component="span"
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: "#8252e9",
                          display: "inline-block",
                          marginRight: 1.2,
                        }}
                  
                      />
                       <Typography variant="body2" sx={{ fontWeight:500, fontSize: "1.25rem", color: "#000" }}>
                            5/29
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: "1rem", color: "#000", marginTop: 1,fontWeight:"600" }}>
                        More info
                    </Typography>
                  </Box>

                  {/* Right Side Icon */}
                    <Box
                  sx={{
                    backgroundColor: "#8252e9", // Background color for the image container
                    padding: 1.1  , // Padding around the image
                    borderRadius: 2, // Border radius for rounded corners
                    display: 'flex', // Ensure flexbox alignment if needed
                    justifyContent: 'center', // Center image horizontally
                    alignItems: 'center', // Center image vertically
                  }}
                  >
                        <img
                          src={locker2} // Use the imported Logo
                          alt="Company Logo"
                          style={{
                            width: "25px", // Set width of the locker image
                            height: "25px", // Set height of the locker image
                            filter: "invert(1) brightness(10)", // Invert the image colors and increase brightness
                          }}
                        />
                      </Box>
                
                </Box>
              </CardContent>
            </Card>
       </Grid>
       <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                borderRadius: 5,
                background: "linear-gradient(45deg, #e8fff5 30%, #ffffff 90%)",
                color: "#fff",
                boxShadow: "inset 0 0 7px 7px rgba(154, 161, 171, 0.14)", // Updated box-shadow
                border: "1px solid #d7dbda", // Added border
                padding: 2,
              }}
            >
            <CardContent sx={{ padding: "5px 0px 8px 0px!important" }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  {/* Left Side Content */}
                  <Box>
                    <Typography sx={{ fontWeight:500, fontSize: "16px", color: "#000000", fontFamily: 'Poppins, sans-serif' }}>
                       Active Account Holders
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                      <Box
                        component="span"
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: "#51ce8a",
                          display: "inline-block",
                          marginRight: 1.2,
                        }}
                  
                      />
                       <Typography variant="body2" sx={{ fontWeight:500, fontSize: "1.35rem", color: "#000" }}>
                       5
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: "1rem", color: "#000", marginTop: 1,fontWeight:"600" }}>
                        More info
                    </Typography>
                  </Box>

                  {/* Right Side Icon */}
                    <Box
                  sx={{
                    backgroundColor: "#45b369", // Background color for the image container
                    padding: 1.1  , // Padding around the image
                    borderRadius: 2, // Border radius for rounded corners
                    display: 'flex', // Ensure flexbox alignment if needed
                    justifyContent: 'center', // Center image horizontally
                    alignItems: 'center', // Center image vertically
                  }}
                  >
                        <img
                          src={locker3} // Use the imported Logo
                          alt="Company Logo"
                          style={{
                            width: "25px", // Set width of the locker image
                            height: "25px", // Set height of the locker image
                            filter: "invert(1) brightness(10)", // Invert the image colors and increase brightness
                          }}
                        />
                      </Box>
                
                </Box>
              </CardContent>
            </Card>
       </Grid>
       <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                borderRadius: 5,
                background: "linear-gradient(45deg, #ffeeee 30%, #ffffff 90%)",
                color: "#fff",
                boxShadow: "inset 0 0 7px 7px rgba(154, 161, 171, 0.14)", // Updated box-shadow
                border: "1px solid #d7dbda", // Added border
                padding: 2,
              }}
            >
            <CardContent sx={{ padding: "5px 0px 8px 0px!important" }}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  {/* Left Side Content */}
                  <Box>
                    <Typography sx={{ fontWeight: 500, fontSize: "16px", color: "#000000", fontFamily: 'Poppins, sans-serif' }}>
                        Locker Operations Today
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                      <Box
                        component="span"
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          backgroundColor: "#fc696a",
                          display: "inline-block",
                          marginRight: 1.2,
                        }}
                  
                      />
                       <Typography variant="body2" sx={{ fontWeight:500, fontSize: "1rem", color: "#000" }}>
                            0
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: "1rem", color: "#000", marginTop: 1,fontWeight:"600" }}>
                        More info
                    </Typography>
                  </Box>

                  {/* Right Side Icon */}
                    <Box
                  sx={{
                    backgroundColor: "#f85455", // Background color for the image container
                    padding: 1.1  , // Padding around the image
                    borderRadius: 2, // Border radius for rounded corners
                    display: 'flex', // Ensure flexbox alignment if needed
                    justifyContent: 'center', // Center image horizontally
                    alignItems: 'center', // Center image vertically
                  }}
                  >
                        <img
                          src={locker4} // Use the imported Logo
                          alt="Company Logo"
                          style={{
                            width: "25px", // Set width of the locker image
                            height: "25px", // Set height of the locker image
                            filter: "invert(1) brightness(10)", // Invert the image colors and increase brightness
                          }}
                        />
                      </Box>
                
                </Box>
              </CardContent>
            </Card>
       </Grid>
     </Grid>
     <Grid container spacing={2} mt={2}>
    {/* Audience Report Section */}
    <Grid item xs={12} md={6}>
        <Paper elevation={0} sx={{ p: 2, border: 'none',borderRadius:"20px", boxShadow: 'none' }}>
            <Typography
                variant="h6"
                gutterBottom
                sx={{
                    display: 'inline-block',
                    margin: 0,
                    fontSize: '1.3rem',
                    color: '#050505',
                    fontFamily: '"Work Sans", sans-serif',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                }}
            >
                Branch Wise Locker Status
            </Typography>
            <Chart
                options={{
                    series: [
                        {
                            name: 'Allocated',
                            data: [100, 80] // Replace with actual allocated data
                        },
                        {
                            name: 'Unallocated',
                            data: [48, 11] // Replace with actual unallocated data
                        }
                    ],
                    chart: {
                        type: 'bar',
                        height: 280,
                        stacked: true,
                        toolbar: { show: false },
                        rtl: true // Right-to-left layout
                    },
                    colors: ['rgba(59, 130, 246, 0.5)', '#d2e1e8'],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: ['25%', '10%',],
                            borderRadius: 5 // Rounded corners
                        }
                    },
                    dataLabels: { enabled: false },
                    stroke: {
                        width: 0,
                        colors: ['transparent']
                    },
                    grid: {
                        borderColor: '#f7f7f7',
                        row: {
                            colors: ['transparent'],
                            opacity: 0
                        },
                        yaxis: { lines: { show: true } }
                    },
                    xaxis: {
                        categories: ['High', 'Medium'], // Reverse order for RTL
                        labels: {
                            rotate: -90,
                            style: {
                                colors: "rgb(107, 114, 128)",
                                fontSize: "12px",
                                textAlign: "right", // Align text right for RTL
                            }
                        }
                    },
                    yaxis: {
                        title: {
                            style: {
                                colors: "rgb(107, 114, 128)",
                                fontSize: "12px"
                            }
                        },
                        labels: {
                            style: {
                                colors: "rgb(107, 114, 128)",
                                fontSize: "12px"
                            },
                            formatter: value => value.toFixed(0)
                        }
                    },
                    fill: { opacity: 1 },
                    tooltip: {
                        y: {
                            formatter: val => `${val} users`
                        }
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'right',
                        offsetY: 0,
                        offsetX: -10,
                        itemMargin: {
                            horizontal: 10,
                            vertical: 0
                        }
                    }
                }}
                series={[
                    { name: 'Allocated', data: [100, 80] }, // Replace with actual allocated data
                    { name: 'Unallocated', data: [48, 11] } // Replace with actual unallocated data
                ]}
                type="bar"
                height={280}
            />
        </Paper>
    </Grid>
    <Grid item xs={12} md={6}>
    <Paper elevation={0} sx={{ p: "20px", borderRadius: "20px", background: "#7a99e8" }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          display: 'inline-block',
          margin: 0,
          fontSize: '1.3rem',
          color: '#fff',
          fontFamily: '"Work Sans", sans-serif',
          fontWeight: 600,
          textTransform: 'capitalize',
        }}
      >
        Rent Collection
      </Typography>

      <Chart
        options={{
          chart: {
            type: 'pie',
            height: 280,
          },
          labels: ['Recovered Rent', 'Un-Recovered Rent'],
          colors: ['#c4c6fa', '#8252e9'],
          plotOptions: {
            pie: {
              borderWidth: 3, // Set border width for the pie segments
              borderColor: '#ff0000', // Set border color to red
              donut: {
                size: '65%', // Optional: Set size for donut chart if needed
              },
            },
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '14px',
              colors: ['#fff'],
            },
            dropShadow: {
              enabled: false,
            },
            position: 'center',
          },
          tooltip: {
            y: {
              formatter: (val) => `${val}%`,
            },
          },
          legend: {
            position: 'top',
            horizontalAlign: 'center',
            fontSize: '14px',
            fontWeight: 600,
            labels: {
              colors: '#fff',
              style: {
                textShadow: 'none',
              },
            },
          },
        }}
        series={[55.5, 33.5]} // Update this dynamically as needed
        type="pie"
        height={250}
      />
    </Paper>
    </Grid>
</Grid>



    </>
  );
}