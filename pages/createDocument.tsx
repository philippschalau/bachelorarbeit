import Header from './components/Header'
import UserDataList from "./components/UserDataList";
import {UserData} from "./api/userdata";
import {TextModule} from "./api/textmodule";
import {useEffect, useState} from "react";
import axios from "axios";
import TextModuleList from "./components/TextModuleList";
import {Box, Button, Divider, Drawer, List, Toolbar} from "@mui/material";
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

pdfMake.vfs = pdfFonts.pdfMake.vfs




function CreateDocument() {
    const [userData, setUserData] = useState<UserData[]>([]);
    const [textModule, setTextModule] = useState<TextModule[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3000/api/userdata');
            setUserData(res.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3000/api/textmodule');
            setTextModule(res.data);
        };
        fetchData();
    }, []);

    var dd = {
        content: [
            {text: 'HEHEHE'},
            {text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \n' +
                    '\n' +
                    'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,'},
        ]
    }

    const [url, setUrl] = useState('')

    const createPdf = () => {
        const pdfGenerator = pdfMake.createPdf(dd);
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
                            sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', margin: '30px'}}>
                            <UserDataList userData={userData}/>
                            <TextModuleList textModules={textModule}/>
                        </Box>
                    </List>
                    <Button onClick={createPdf} disableRipple={true} sx={{
                        fontWeight: 'bold', color: '#76B900', "&.MuiButtonBase-root:hover": {
                            bgcolor: "white"
                        }
                    }}>Generate PDF</Button>
                </Drawer>
            </Box>
            <Box component="main" sx={{marginLeft: '800px', marginTop: '100px'}} >
                <iframe style={{width: '210mm', height: '297mm'}} src={url}></iframe>
            </Box>
        </Box>
    );
}


export default CreateDocument;