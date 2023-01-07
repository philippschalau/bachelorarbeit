import {UserData} from "../api/userdata";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, {useEffect, useState} from "react";
import axios from "axios";




const UserDataList= (props: { onUserChange: (content: string) => void }) => {
    const [userData, setUserData] = useState<UserData[]>([]);
    const [user, setUser] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3000/api/userdata');
            setUserData(res.data);
        };
        fetchData();
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        setUser(event.target.value as string);
        props.onUserChange(event.target.value as string);
    };
    return (
        <Box>
            <FormControl sx={{minWidth: 300, marginBottom: 10}}>
                <InputLabel id="demo-simple-select-label">User</InputLabel>
                <Select
                    label="User"
                    onChange={handleChange}
                    value={user}
                >
                    {userData.map(user => (
                        <MenuItem key={user.id} value={user}>{user.firstname} {user.lastname}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};


export default UserDataList;

