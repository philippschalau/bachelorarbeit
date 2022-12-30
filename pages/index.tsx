import Header from './components/DocumentHeader'
import {Box, Card, Toolbar, TextField, Button} from "@mui/material";


function Home() {
    return (
        <Box>
            <Header/>
            <Toolbar/>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', margin: '30px'}}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    padding: '30px',
                    minWidth: 600
                }}>
                    <TextField variant="outlined" label="Vorname"></TextField>
                    <TextField variant="outlined" label="Nachname"></TextField>
                    <TextField variant="outlined" label="E-Mail"></TextField>
                    <TextField variant="outlined" label="Straße"></TextField>
                    <TextField variant="outlined" label="Stadt"></TextField>
                    <TextField variant="outlined" label="Postleitzahl"></TextField>
                    <Button variant="contained" sx={{
                        width: 150, background: '#76B900', "&.MuiButtonBase-root:hover": {
                            bgcolor: "#76B900"
                        }
                    }}>Speichern</Button>
                </Card>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    padding: '30px',
                    minWidth: 1000
                }}>
                    <TextField variant="outlined" label="Name"></TextField>
                    <TextField variant="outlined" label="Text" rows={10} multiline></TextField>
                    <Button variant="contained" sx={{
                        width: 150, background: '#76B900', "&.MuiButtonBase-root:hover": {
                            bgcolor: "#76B900"
                        }
                    }}>Speichern</Button>
                </Card>
            </Box>
        </Box>
    );
}

export default Home;

