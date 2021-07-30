import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function CampoDeSelecao({
  id,
  name,
  label,
  value,
  className,
  onChange,
  required = false
}) {
  return (
    <FormControl className={className}>
      <Select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        displayEmpty
        className={className}
        required={required}
        inputProps={{
        'aria-label': 'Without label'
      }}>
        <MenuItem value="" disabled>
        {label}
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText></FormHelperText>
    </FormControl>
  );
}

export default CampoDeSelecao;