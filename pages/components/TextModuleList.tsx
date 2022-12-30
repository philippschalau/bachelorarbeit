import {NextPage} from 'next';
import {TextModule} from "../api/textmodule";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


type Props = {
    textModules: TextModule[];
};

const TextModuleList: NextPage<Props> = ({textModules}) => {
    return (
        <div>
            <FormControl sx={{minWidth: 300}}>
                <InputLabel id="demo-simple-select-label">Textbaustein</InputLabel>
                <Select
                    label="Textbaustein"
                >
                    {textModules.map(textmodule => (
                        <div key={textmodule.id}>
                            <MenuItem value={textmodule.id}>{textmodule.name}</MenuItem>
                        </div>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default TextModuleList;