import React, {useEffect, useState} from 'react';
import Veiculos from '../../services/VeiculoService';
import Cards from '../../shared/components/Cards/Cards'

export function agruparVeiculosPorMarca(veiculos) {
    if (veiculos) {
        var result = veiculos.reduce(function (r, a) {
            r[a.marca.nome] = r[a.marca.nome] || [];
            
            r[a.marca.nome].push(a.valor);
            return r;
        }, Object.create(null));
        
        return Object.entries(result).map(([marca, data]) => ({ marca, data }));
    }

    return [];
}

const Dashboard = () => {
    const [veiculos, setVeiculos] = useState();

    useEffect(() => {
        Veiculos.listar()
            .then(dados => { 
                setVeiculos(agruparVeiculosPorMarca(dados));
            });
    }, []);

    return (
        <div data-testid="divDashboard">
               <Cards veiculos={veiculos}/>
        </div>);
}

export default Dashboard;
