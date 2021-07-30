import React from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';

function CampoDeValor({
  id,
  name,
  value,
  label,
  currencySymbol,
  onChange,
  minimumValue,
  maximumValue,
  minimumValueMessage,
  decimalCharacter,
  digitGroupSeparator,
  isValid,
  required = false
}) {
  return (
    <CurrencyTextField
        id={id}
        name={name}
        label={label}
        value={value}
        currencySymbol={currencySymbol}
        onChange={onChange}
        error={isValid}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        helperText={isValid && minimumValueMessage}
        decimalCharacter={decimalCharacter}
        digitGroupSeparator={digitGroupSeparator}
        required={required}
    />);
}

export default CampoDeValor;