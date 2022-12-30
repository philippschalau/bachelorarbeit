import Header from './components/DocumentHeader'
import PostUserData from "./components/postUserData";
import PostTextModule from "./components/postTextModule";
import {Box, Toolbar} from "@mui/material";


function Home() {
    return (
        <Box>
            <Header/>
            <Toolbar/>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <PostUserData/>
                <PostTextModule/>
            </Box>
        </Box>
    );
}

export default Home;

