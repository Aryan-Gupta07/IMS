import { Box,Button, Stack,Paper,TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio, MenuItem} from '@mui/material'
import { useState } from 'react';
function EnqueryForm() {

  
  const [name, setName] = useState("");
  const [emailaddress, setEmail] = useState("");
  const [phonenumber, setPhone] = useState();
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpin] = useState();
  const [highest, sethq] = useState("");
  const [interest, setint] = useState("");
  const [priorcomputerknowledge, setje] = useState("");
 
  // const [department, setdepartment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name , phonenumber , emailaddress, address:{city , state , pincode } ,qualification:{ highest, interest , priorcomputerknowledge}};
    fetch("http://localhost:8080/api/v1/enquiry", {
      method: "post",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  
  console.log(JSON.stringify(data))
};

  // value={email}
  // onChange={(event) => setEmail(event.target.value)


  return (
  <div className="form" >

    <Paper sx={{ padding: '32px' }} elevation={2}>
    <Stack spacing={3} direction = 'column'>

    <h3>Personal information</h3>
    <Stack spacing={2} direction = 'row'>
  
      <TextField label = "Name" variant="outlined"  value={name} onChange={(event)=>setName(event.target.value)}/>
      <TextField label = "Phone" variant="outlined" value={phonenumber} onChange={(event)=>setPhone(event.target.value)} />
      <TextField label = "email" variant="outlined"  value={emailaddress} onChange={(event)=>setEmail(event.target.value)} />



    </Stack>

    <h3>Address</h3>

    <Stack spacing={2} direction = 'row'>

    <TextField label = "city" variant="outlined"  value={city} onChange={(event)=>setcity(event.target.value)}/>
    <TextField label = "state" variant="outlined" value={state} onChange={(event)=>setstate(event.target.value)}/>
    <TextField label = "Pincode" variant="outlined" value={pincode} onChange={(event)=>setpin(event.target.value)}/>

    </Stack>

    <h3>Qualification</h3>
      
    <Stack spacing={2} direction = 'column'>
      <Stack spacing = {2} direction = 'row'>

      <TextField label = "Highest qualification" variant="outlined" value={highest} onChange={(event)=>sethq(event.target.value)}/>
      <TextField label = "Interest" variant="outlined" value={interest} onChange={(event)=>setint(event.target.value)}/>
    
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
              onChange={(event)=>setje(event.target.value)}
            />
            <FormControlLabel
              labelPlacement='start'
              value='3-5'
              control={<Radio size='small' color='secondary' />}
              label='No'
              onChange={(event)=>setje(event.target.value)}
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
                // value = {country}
                // onChange = {handleChange}
                >

                <MenuItem value = "Cyber security" >Cyber Security</MenuItem>
                <MenuItem value = "Development" >Development</MenuItem>
                <MenuItem value = "Networking" >Networking</MenuItem>
                <MenuItem value = "cloud" >cloud</MenuItem>
                <MenuItem value = "cloud" >Other</MenuItem>
                {/* onChange={(event)=>setdepartment(event.target.value)} */}
                {/* #Ayush  if your select other then show him a text area to input a field*/}



            </TextField>
    </Box>
    </Stack> 

    <Button type="submit" onClick={handleSubmit}>submit</Button>
    
    </Paper>
    </div>
    
  );
}
export default EnqueryForm
