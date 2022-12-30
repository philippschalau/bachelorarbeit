import {Box, Card, TextField, Button, Typography} from "@mui/material";


function PostUserData() {
    return (
        <Box>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                padding: '30px',
                minWidth: 600,
                borderRadius: '20px'
            }}>
                <Typography
                    sx={{fontSize: 'large', fontWeight: 'bold', marginBottom: '20px'}}>Kundendaten</Typography>
                <TextField variant="outlined" label="Vorname" size="small" sx={{marginBottom: '20px'}}></TextField>
                <TextField variant="outlined" label="Nachname" size="small" sx={{marginBottom: '20px'}}></TextField>
                <TextField variant="outlined" label="E-Mail" size="small" sx={{marginBottom: '20px'}}></TextField>
                <TextField variant="outlined" label="Straße" size="small" sx={{marginBottom: '20px'}}></TextField>
                <TextField variant="outlined" label="Stadt" size="small" sx={{marginBottom: '20px'}}></TextField>
                <TextField variant="outlined" label="Postleitzahl" size="small" sx={{marginBottom: '20px'}}></TextField>
                <Button variant="contained" sx={{
                    width: 150, background: '#76B900', fontWeight: 'bold', "&.MuiButtonBase-root:hover": {
                        bgcolor: "#76B900"
                    }
                }}>Speichern</Button>
            </Card>
        </Box>
    );
}

export default PostUserData;

