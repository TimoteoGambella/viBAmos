import { TextField } from "@mui/material";
import { ThemeProvider,createTheme } from '@mui/material/styles';

export default function Input({ label,error,helper,disabled,classes,handleChange,typeOfInput }) {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#002F6C',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <TextField
                variant="outlined"
                id={`outlined-basic`}
                error={error && !disabled}
                disabled={disabled}
                label={label}
                helperText={helper}
                type={typeOfInput}
                color="primary"
                className={
                    `specialInput ${classes}
                    ${!error && !disabled && "active"}
                    ${error && !disabled && "error"}
                    ${!error && disabled && "disabled"}
                    ${error && disabled && "disabled"}`
                }
                onChangeCapture={(e) => handleChange(e.target.value)}
            />
        </ThemeProvider>
    )
}