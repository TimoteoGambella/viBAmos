import { TextField } from "@mui/material";

export default function Input({label,error,helper,disabled}){
    return(
        <TextField
            variant="outlined"
            id={`outlined-basic`}
            error={error&&!disabled}
            disabled={disabled}
            label={label}
            helperText={helper}
            className={
                `specialInput
                ${!error&&!disabled&&"active"}
                ${error&&!disabled&&"error"}
                ${!error&&disabled&&"disabled"}
                ${error&&disabled&&"disabled"}`
            }
        />
    )
}