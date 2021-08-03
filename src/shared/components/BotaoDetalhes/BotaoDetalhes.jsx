import React from "react";
import {useHistory, useParams} from "react-router";

import {BotaoCancelar, BotaoPrincipal} from "../../../@material/Button";

const BotaoDetalhes = ({salvarDesabilidado}) => {
    const {id} = useParams();
    const history = useHistory();

    function cancelar() {
        history.goBack();
    }

    return (
        <div className='buttonContainer'>
            <BotaoPrincipal
                variant="contained"
                color="primary"
                type="submit"
                disabled={salvarDesabilidado}
            >
                {id ? 'Alterar' : 'Cadastrar'}
            </BotaoPrincipal>

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
