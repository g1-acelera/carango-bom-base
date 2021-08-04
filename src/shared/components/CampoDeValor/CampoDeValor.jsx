import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

CampoDeValor.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

function CampoDeValor(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: "valor",
            value: values.floatValue,
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$"
      isNumericString
    />
  );
}

export default CampoDeValor;