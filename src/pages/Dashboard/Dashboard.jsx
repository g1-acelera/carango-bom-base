import React, {useEffect, useState} from 'react';
import Veiculos from '../../services/VeiculoService';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Fragment } from 'react';
import NumberFormat from 'react-number-format';
import Style from './Dashboard.module.css';

const Dashboard = () => {
    const [veiculos, setVeiculos] = useState();

    useEffect(() => {
        Veiculos.listar()
            .then(dados => { 
                var result = dados.reduce(function (r, a) {
                    r[a.marca.nome] = r[a.marca.nome] || [];
                    
                    r[a.marca.nome].push(a.valor);
                    return r;
                }, Object.create(null));
                
                const teste = Object.entries(result).map(([marca, data]) => ({ marca, data }));
                setVeiculos(teste);
            });
    }, []);

    return (
        <Fragment>
                {veiculos && veiculos.map((veiculo) => (
                    <Card key={veiculo.marca} className={Style.cardPrincipal}>
                        <CardContent>
                        <Typography className={Style.cardTitulo} color="textSecondary" gutterBottom>
                            Marca
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {veiculo.marca}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {veiculo.data.length} quantidade(s)
                          <br />
                          <NumberFormat value={veiculo.data.reduce((accumulator, current) => accumulator + current, 0)} 
                              displayType={'text'} decimalSeparator="," thousandSeparator="." prefix="R$" />
                        </Typography>
                        </CardContent>
                    </Card>)
        )}
        </Fragment>);
}

export default Dashboard;
