import Header from './components/Header'
import UserDataList from "./components/UserDataList";
import {useState} from "react";
import TextModuleList from "./components/TextModuleList";
import {Box, Button, Divider, Drawer, List, Toolbar} from "@mui/material";
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import {Grade, UserData} from "./api/userdata";
import {TextModule} from "./api/textmodule";


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

    const user = new Object(selectedUser) as UserData
    const content = new Object(selectedContent) as TextModule
    let grades = user.grades


    // @ts-ignore
    const greeting = user.salutation == 'Herr' ? 'Sehr geehrter Herr ' + selectedUser.lastname + ',' : 'Sehr geehrte Frau ' + selectedUser.lastname + ','


    const freeText = {
        content: [
            {
                columns: [
                    {
                        text: user.firstname + " " + user.lastname + "\n" + user.street + "\n" + user.zip + " " + user.city,
                        margin: [0, 0, 0, 100]
                    },
                    {
                        stack: [
                            {text: 'Berlin, ' + germanDate, alignment: 'right'}
                        ],
                    }
                ]
            },
            {text: content.subject, margin: [0, 0, 0, 30]},
            {text: greeting, margin: [0, 0, 0, 10]},
            {
                text: content.content,
                margin: [0, 0, 0, 20]
            },
            {text: 'Dieses Schreiben trägt weder Unterschrift noch Siegel, da es maschinell erstellt wurde.'},
        ]
    };

    function createTable() {
        if (grades) {
            const leistungsnachweis = {
                content: [
                    {
                        columns: [
                            {
                                text: user.firstname + " " + user.lastname + "\n" + user.street + "\n" + user.zip + " " + user.city,
                                margin: [0, 0, 0, 100]
                            },
                            {
                                stack: [
                                    {text: 'Berlin, ' + germanDate, alignment: 'right'}
                                ],
                            }
                        ]
                    },
                    {text: content.content, margin: [0, 0, 0, 30], bold: true},
                    {text: greeting, margin: [0, 0, 0, 10]},
                    {
                        text: 'In nachfolgend aufgeführten Modulen wurden Prüfungsleistungen erzielt:',
                        margin: [0, 0, 0, 20]
                    },
                    {
                        table: {
                            headerRows: 1,
                            widths: ['*', '*'],

                            body: [
                                [{text: 'Modul', bold: true}, {text: 'Note', bold: true}],
                                [grades[0].module, grades[0].grade],
                                [grades[1].module, grades[1].grade],
                                [grades[2].module, grades[2].grade]
                            ]
                        }
                    },
                    {
                        text: 'Dieses Schreiben trägt weder Unterschrift noch Siegel, da es maschinell erstellt wurde.',
                        margin: [0, 30, 0, 0]
                    },
                ]
            };
            return leistungsnachweis;
        }

    }


    const [url, setUrl] = useState('')


    const createPdf = () => {
        // @ts-ignore
        const pdfGenerator = pdfMake.createPdf(content.name == 'Leistungsnachweis' ? createTable() : freeText);
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