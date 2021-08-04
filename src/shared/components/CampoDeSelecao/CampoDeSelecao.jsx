import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

function CampoDeSelecao({
  id,
  name,
  label,
  value,
  className,
  onChange,
  dados
}) {
  return (
    <FormControl fullWidth variant="outlined" required className={className}>
      <InputLabel id="demo-simple-select-required-label">{label}</InputLabel>
      <Select
        data-testid="select-test-id"      
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
      >
        {dados && dados !== undefined && dados.map((valor) =>  (
         <MenuItem data-testid={`${valor.id}-item`} key={valor.id} value={valor.id}>
        {valor.nome}
        </MenuItem>
    ))}
      </Select>
    </FormControl>
  );
}

export default CampoDeSelecao;