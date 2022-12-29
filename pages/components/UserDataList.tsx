import { NextPage } from 'next';
import {UserData} from "../api/userdata";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";




type Props = {
  userData: UserData[];
};

const UserDataList: NextPage<Props> = ({ userData }) => {
  return (
      <div>
          <FormControl sx={{minWidth: 300, marginBottom: 10}}>
              <InputLabel id="demo-simple-select-label">User</InputLabel>
              <Select
                  label="User"
              >
                  {userData.map(user => (
                      <div key={user.id}>
                          <MenuItem value={user.id}>{user.firstname} {user.lastname}</MenuItem>
                      </div>
                  ))}
              </Select>
          </FormControl>
      </div>
  );
};



export default UserDataList;
