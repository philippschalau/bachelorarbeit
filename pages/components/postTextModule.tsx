import {Box, Card, TextField, Button, Typography} from "@mui/material";
import {useState} from "react";
import axios from "axios";


function PostTextModule() {
    const [name, setName] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [content, setContent] = useState<string>('');

    function postTextModule() {
        const data = {
            name: name,
            subject: subject,
            content: content,
        };
        const json = JSON.stringify(data);
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.post('http://localhost:3000/api/textmodule',
            json, customConfig
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        setName('');
        setContent('');
        setSubject('');
    }

    return (
        <Box>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '30px',
                minWidth: 1000,
                borderRadius: '20px',
                marginTop: '100px',
                height: '600px'
            }}>
                <Typography sx={{fontSize: 'large', fontWeight: 'bold', marginBottom: '20px'}}>Textbaustein</Typography>
                <TextField variant="outlined" label="Name" size="small" sx={{marginBottom: '20px'}} value={name}
                           onChange={(e) => setName(e.target.value)}></TextField>
                <TextField variant="outlined" label="Überschrift" size="small" sx={{marginBottom: '20px'}}
                           value={subject}
                           onChange={(e) => setSubject(e.target.value)}></TextField>
                <TextField variant="outlined" label="Text" rows={12} multiline
                           sx={{marginBottom: '37px'}} value={content}
                           onChange={(e) => setContent(e.target.value)}></TextField>
                <Button variant="contained" sx={{
                    width: 150, background: '#76B900', fontWeight: 'bold', "&.MuiButtonBase-root:hover": {
                        bgcolor: "#76B900"
                    }
                }} onClick={postTextModule}>Speichern</Button>
            </Card>
        </Box>
    );
}

export default PostTextModule;

