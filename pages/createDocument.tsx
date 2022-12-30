import DocumentHeader from './components/DocumentHeader'
import UserDataList from "./components/UserDataList";
import {UserData} from "./api/userdata";
import {TextModule} from "./api/textmodule";
import {useEffect, useState} from "react";
import axios from "axios";
import TextModuleList from "./components/TextModuleList";
import {Box, Divider, Drawer, List, Toolbar} from "@mui/material";


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

    const drawerWidth = 400;
    return (
        <Box>
            <DocumentHeader/>
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
            </Drawer>

        </Box>
    );
}


export default CreateDocument;