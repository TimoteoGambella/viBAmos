import { TextField } from "@mui/material";

export default function Input({ label,error,helper,disabled,classes,handleChange,typeOfInput }) {
    return (
        <TextField
            variant="outlined"
            id={`outlined-basic`}
            error={error && !disabled}
            disabled={disabled}
            label={label}
            helperText={helper}
            type={typeOfInput}
            className={
                `specialInput ${classes}
                ${!error && !disabled && "active"}
                ${error && !disabled && "error"}
                ${!error && disabled && "disabled"}
                ${error && disabled && "disabled"}`
            }
            onChangeCapture={(e) => handleChange(e.target.value)}
        />
    )
}