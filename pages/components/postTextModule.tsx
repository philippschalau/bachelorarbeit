import {Box, Card, TextField, Button, Typography} from "@mui/material";


function PostTextModule() {
    return (
        <Box>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '30px',
                minWidth: 1000,
                borderRadius: '20px'
            }}>
                <Typography sx={{fontSize: 'large', fontWeight: 'bold', marginBottom: '20px'}}>Textbaustein</Typography>
                <TextField variant="outlined" label="Name" size="small" sx={{marginBottom: '20px'}}></TextField>
                <TextField variant="outlined" label="Text" rows={10} multiline
                           sx={{marginBottom: '37px'}}></TextField>
                <Button variant="contained" sx={{
                    width: 150, background: '#76B900', fontWeight: 'bold', "&.MuiButtonBase-root:hover": {
                        bgcolor: "#76B900"
                    }
                }}>Speichern</Button>
            </Card>
        </Box>
    );
}

export default PostTextModule;

