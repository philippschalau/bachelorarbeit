import {Box, Card, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl} from "@mui/material";
import {useState} from "react";
import axios from "axios";


function PostUserData() {
    const [email, setEmail] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [zip, setZip] = useState<string>('');
    const [salutation, setSalutation] = useState<string>('');

    function postUserData() {
        const data = {
            email: email,
            firstname: firstname,
            lastname: lastname,
            street: street,
            city: city,
            zip: zip,
            salutation: salutation
        };
        const json = JSON.stringify(data);
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.post('http://localhost:3000/api/userdata',
            json, customConfig
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        setEmail('');
        setFirstname('');
        setLastname('');
        setStreet('');
        setCity('');
        setZip('');
        setSalutation('');

    }

    return (
        <Box>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                padding: '30px',
                minWidth: 600,
                borderRadius: '20px',
                marginTop: '100px',
                height: '600px'
            }}>
                <Typography
                    sx={{fontSize: 'large', fontWeight: 'bold', marginBottom: '20px'}}>Kundendaten</Typography>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Anrede</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={salutation}
                        onChange={(e) => setSalutation(e.target.value)}
                        variant="outlined"
                        size="small"
                        sx={{marginBottom: '20px'}}
                        label="Anrede"
                    >
                        <MenuItem value={'Herr'}>Herr</MenuItem>
                        <MenuItem value={'Frau'}>Frau</MenuItem>
                    </Select>
                </FormControl>
                <TextField variant="outlined" label="Vorname" size="small" sx={{marginBottom: '20px'}} value={firstname}
                           onChange={(e) => setFirstname(e.target.value)}></TextField>
                <TextField variant="outlined" label="Nachname" size="small" sx={{marginBottom: '20px'}} value={lastname}
                           onChange={(e) => setLastname(e.target.value)}></TextField>
                <TextField variant="outlined" label="E-Mail" size="small" sx={{marginBottom: '20px'}} value={email}
                           onChange={(e) => setEmail(e.target.value)}></TextField>
                <TextField variant="outlined" label="Straße" size="small" sx={{marginBottom: '20px'}} value={street}
                           onChange={(e) => setStreet(e.target.value)}></TextField>
                <TextField variant="outlined" label="Stadt" size="small" sx={{marginBottom: '20px'}} value={city}
                           onChange={(e) => setCity(e.target.value)}></TextField>
                <TextField variant="outlined" label="Postleitzahl" size="small" sx={{marginBottom: '20px'}} value={zip}
                           onChange={(e) => setZip(e.target.value)}></TextField>
                <Button variant="contained" sx={{
                    width: 150, background: '#76B900', fontWeight: 'bold', "&.MuiButtonBase-root:hover": {
                        bgcolor: "#76B900"
                    }
                }} onClick={postUserData}>Speichern</Button>
            </Card>
        </Box>
    );
}

export default PostUserData;

