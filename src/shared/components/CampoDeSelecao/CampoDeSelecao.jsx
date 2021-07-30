import React, {useEffect, useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MarcaService from '../../../services/MarcaService';




function CampoDeSelecao({
  id,
  name,
  label,
  value,
  className,
  onChange,
  required = false
}) {
  const [marcas, setMarcas] = useState();

  useEffect(() => { 
    MarcaService.listar()
    .then(dados => { 
      setMarcas(dados)
    });
  } , []);

  return (
    <FormControl fullWidth className={className}>
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
        {marcas && marcas.map((marca) =>  (
         <MenuItem key={marca.id} value={marca.id}>
        {marca.nome}
        </MenuItem>
    ))}
      </Select>
      <FormHelperText></FormHelperText>
    </FormControl>
  );
}

export default CampoDeSelecao;