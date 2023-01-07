import Header from './components/Header'
import UserDataList from "./components/UserDataList";
import {useState} from "react";
import TextModuleList from "./components/TextModuleList";
import {Box, Button, Divider, Drawer, List, Toolbar} from "@mui/material";
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"


pdfMake.vfs = pdfFonts.pdfMake.vfs


const CreateDocument = () => {
    const currentDate = new Date();
    const germanDate = currentDate.toLocaleDateString('de-DE', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });




    const [selectedContent, setSelectedContent] = useState<string>('');
    const [selectedUser, setSelectedUser] = useState<string>('')
    const handleContentChange = (content: string) => {
        setSelectedContent(content);
    };
    const handleUserChange = (content: string) => {
        setSelectedUser(content);
    };

    // @ts-ignore
    const greeting = selectedUser.salutation == 'Herr' ? 'Sehr geehrter Herr ' + selectedUser.lastname + ',' : 'Sehr geehrte Frau' + selectedUser.lastname +','

    const documentDefinition = {
        content: [
            {
                columns: [
                    {text: selectedUser.firstname + " " + selectedUser.lastname + "\n" + selectedUser.street + "\n" + selectedUser.zip + " " + selectedUser.city, margin: [0, 0, 0, 100]},
                    {
                        stack: [
                            {text: 'Berlin, ' + germanDate, alignment: 'right'}
                        ],
                    }
                ]
            },
            {text: selectedContent.subject, margin: [0, 0, 0, 30]},
            {text: greeting, margin: [0, 0, 0, 10]},
            {
                text: selectedContent.content,
                margin: [0, 0, 0, 20]
            },
            {text: 'Dieses Schreiben trägt weder Unterschrift noch Siegel, da es maschinell erstellt wurde.'},
        ]
    };


    const [url, setUrl] = useState('')


    const createPdf = () => {
        // @ts-ignore
        const pdfGenerator = pdfMake.createPdf(documentDefinition);
        pdfGenerator.getBlob((blob) => {
            const url = URL.createObjectURL(blob)
            setUrl(url)
        })
    }

    const drawerWidth = 400;
    return (
        <Box>
            <Header/>
            <Box>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar/>
                    <Divider/>
                    <List>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                margin: '30px'
                            }}>
                            <UserDataList onUserChange={handleUserChange}/>
                            <TextModuleList onContentChange={handleContentChange}/>
                        </Box>
                    </List>
                    <Button onClick={createPdf} disableRipple={true} sx={{
                        fontWeight: 'bold', color: '#76B900', "&.MuiButtonBase-root:hover": {
                            bgcolor: "white"
                        }
                    }}>Generate PDF</Button>
                </Drawer>
            </Box>
            <Box component="main" sx={{marginLeft: '800px', marginTop: '100px'}}>
                <iframe style={{width: '210mm', height: '297mm'}} src={url}></iframe>
            </Box>
        </Box>
    );
}


export default CreateDocument;