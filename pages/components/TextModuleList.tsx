import {TextModule} from "../api/textmodule";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, {useEffect, useState} from "react";
import axios from "axios";





const TextModuleList = (props: { onContentChange: (content: string) => void }) => {
    const [textModules, setTextModule] = useState<TextModule[]>([]);
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3000/api/textmodule');
            setTextModule(res.data);
        };
        fetchData();
    }, []);
    const handleChange = (event: SelectChangeEvent) => {
        setContent(event.target.value as string);
        props.onContentChange(event.target.value as string);
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
                        <MenuItem key={textmodule.id} value={textmodule}>{textmodule.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default TextModuleList;