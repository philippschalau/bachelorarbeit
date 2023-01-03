import {NextPage} from 'next';
import {UserData} from "../api/userdata";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, {useState} from "react";


type Props = {
    userData: UserData[];
};

const UserDataList: NextPage<Props> = ({userData}) => {
    const [user, setUser] = useState<string>('');
    const handleChange = (event: SelectChangeEvent) => {
        setUser(event.target.value as string);
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
                        <MenuItem key={user.id} value={user.id}>{user.firstname} {user.lastname}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};


export default UserDataList;

