import { Box,Button, Stack,Paper,TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio, MenuItem} from '@mui/material'

function EnquiryForm() {






  return (
  <div className="form">

    <Paper sx={{ padding: '32px' }} elevation={2}>
    <Stack spacing={3} direction = 'column'>

    <h3>Personal information</h3>
    <Stack spacing={2} direction = 'row'>
  
      <TextField label = "Name" variant="outlined"/>
      <TextField label = "Phone" variant="outlined"/>
      <TextField label = "email" variant="outlined"/>

    </Stack>

    <h3>Address</h3>

    <Stack spacing={2} direction = 'row'>

    <TextField label = "city" variant="outlined"/>
    <TextField label = "state" variant="outlined"/>
    <TextField label = "Pincode" variant="outlined"/>

    </Stack>

    <h3>Qualification</h3>
      
    <Stack spacing={2} direction = 'column'>
      <Stack spacing = {2} direction = 'row'>

      <TextField label = "Highest qualification" variant="outlined"/>
      <TextField label = "Interest" variant="outlined"/>
    
      </Stack>

      <Stack spacing = {2} direction = 'row'>
      <FormControl>
          <FormLabel id='Do you have prior computer knowledge'>
            Do you have prior computer knowledge
            </FormLabel>

           <RadioGroup
            row
            aria-labelledby='job-experience-group-label'
            name='job-experience-group'
            // value={value}
            // onChange={handleChange}
            >
            <FormControlLabel
              labelPlacement='start'
              value='0-2'
              control={<Radio size='small' color='secondary' />}
              label='Yes'
            />
            <FormControlLabel
              labelPlacement='start'
              value='3-5'
              control={<Radio size='small' color='secondary' />}
              label='No'
            />
          
            </RadioGroup>
      </FormControl>
      </Stack>      
    </Stack>

    <h3>Subject of Enquery</h3>

    <Box width = "500px">
            <TextField 
                label = "select country" 
                select 
                fullWidth
                value = {country}
                onChange = {handleChange}
                >

                <MenuItem value = "Cyber security" >Cyber Security</MenuItem>
                <MenuItem value = "Development" >Development</MenuItem>
                <MenuItem value = "Networking" >Networking</MenuItem>
                <MenuItem value = "cloud" >cloud</MenuItem>
                <MenuItem value = "cloud" >Other</MenuItem>

                {/* #Ayush  if your select other then show him a text area to input a field*/}



            </TextField>
    </Box>
    </Stack> 

    <Button></Button>
    
    </Paper>
    </div>
    
  );
}
export default EnquiryForm
