import axios from 'axios';
import UserDataList from "./components/UserDataList";
import TextModuleList from "./components/TextModuleList";
import {useEffect, useState} from "react";
import {UserData} from "./api/userdata";
import {TextModule} from "./api/textmodule";



function Home() {
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

    return (
        <div>
            <UserDataList userData={userData} />
            <TextModuleList textModules={textModule} />
        </div>
    );
}

export default Home;