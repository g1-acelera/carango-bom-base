import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import Style from './Cards.module.css';

const Cards = ({veiculos}) => {
  return (
    <div data-testid="divCards">
      {veiculos && veiculos.map((veiculo) => (
        <Card
          key={veiculo.marca}
          className={Style.cardPrincipal}
          data-testid={`${veiculo.marca}-card`}>
          <CardContent>
            <Typography className={Style.cardTitulo} color="textSecondary" gutterBottom>
              Marca
            </Typography>
            <Typography variant="h5" component="h2">
              {veiculo.marca}
            </Typography>
            <Typography variant="body2" component="p">
              {veiculo.data.length}&nbsp;quantidade(s)
              <br/>
              <NumberFormat
                value={veiculo
                .data
                .reduce((accumulator, current) => accumulator + current, 0)}
                displayType={'text'}
                decimalSeparator=","
                thousandSeparator="."
                prefix="R$"/>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
