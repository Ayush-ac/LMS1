import { Box, Card, CardContent, CardHeader, Divider, FormControl, Grid2, InputLabel, Select, Typography } from '@mui/material'
import React from 'react'

export default function CompanyList() {
  return (<>
    <Box>
        <Card>
            <CardHeader
            title={"OFFICE LIST"}
            subheader={"Report / Office List"}
            />

            <Divider/>

            <CardContent >
              <Grid2 display={'flex'} direction={'row'}>
                <Typography variant='h6'>
                  Reporting Office 
                </Typography>
                <FormControl sx={{ml:"15%"}} >
                <InputLabel>Select</InputLabel>
                <Select 
                  size='small'
                  label='Select'
                >

                </Select>
                </FormControl>
              </Grid2>
            </CardContent>
        </Card>
    </Box>
  </>)
}
