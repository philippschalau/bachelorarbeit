import {NextPage} from 'next';
import {TextModule} from "../api/textmodule";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, {useState} from "react";


type Props = {
    textModules: TextModule[];
};

const TextModuleList: NextPage<Props> = ({textModules}) => {
    const [content, setContent] = useState<string>('');
    const handleChange = (event: SelectChangeEvent) => {
        setContent(event.target.value as string);
    };
    return (
        <Box>
            <FormControl sx={{minWidth: 300}}>
                <InputLabel id="demo-simple-select-label">Textbaustein</InputLabel>
                <Select
                    label="Content"
                    onChange={handleChange}
                    value={content}
                >
                    {textModules.map(textmodule => (
                        <MenuItem key={textmodule.id} value={textmodule.id}>{textmodule.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default TextModuleList;