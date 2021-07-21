import React from 'react';
import TextField from '@material-ui/core/TextField';

function CampoDeTexto({ 
    id,
    name,
    value,
    label,
    error,
    onBlur,
    onChange,
    required=false 
})

{   
    return (
        <TextField
            id={id}
            type="text"
            name={name}
            label={label}
            value={value}
            {...(error && {error: error, helperText: onBlur})}
            variant="outlined"
            onChange={onChange}
            required={required}
            // helperText={helperText}
            fullWidth
        />
    );
}

export default CampoDeTexto;