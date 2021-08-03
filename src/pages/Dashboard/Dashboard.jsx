import React, {useEffect, useState} from 'react';
import Veiculos from '../../services/VeiculoService';
import Cards from '../../shared/components/Cards/Cards'

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
        <div data-testid="divDashboard">
               <Cards veiculos={veiculos}/>
        </div>);
}

export default Dashboard;
