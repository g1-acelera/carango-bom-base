import {BotaoCancelar, BotaoSalvar} from "../../../@material/Button";
import React, {useEffect} from "react";
import {useHistory, useParams} from "react-router";

const BotaoDetalhes = ({consultarServico, dadosConsultados, salvarDesabilidato}) => {
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        if (!id) return;
        consultarServico(id).then(dados => dadosConsultados(dados));

    }, [id, dadosConsultados, consultarServico]);

    function cancelar() {
        history.goBack();
    }

    return (
        <div className='buttonContainer'>
            <BotaoSalvar
                variant="contained"
                color="primary"
                type="submit"
                disabled={salvarDesabilidato}
            >
                {id ? 'Alterar' : 'Cadastrar'}
            </BotaoSalvar>

            <BotaoCancelar
                variant="contained"
                color="secondary"
                onClick={cancelar}>
                Cancelar
            </BotaoCancelar>
        </div>
    );
}

export default BotaoDetalhes;
