import React, {useEffect, useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MarcaService from '../../../services/MarcaService';
import InputLabel from '@material-ui/core/InputLabel';

function CampoDeSelecao({
  id,
  name,
  label,
  value,
  className,
  onChange
}) {
  const [marcas, setMarcas] = useState();
  useEffect(() => { 
    MarcaService.listar()
    .then(dados => { 
      setMarcas(dados)
    });
  } , []);

  return (
    <FormControl fullWidth variant="outlined" required className={className}>
      <InputLabel id="demo-simple-select-required-label">{label}</InputLabel>
      <Select      
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        label={label}
      >
        {marcas && marcas.map((marca) =>  (
         <MenuItem key={marca.id} value={marca.id}>
        {marca.nome}
        </MenuItem>
    ))}
      </Select>
    </FormControl>
  );
}

export default CampoDeSelecao;