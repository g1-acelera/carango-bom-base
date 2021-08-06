import React from "react";
import {useHistory, useParams} from "react-router";

import {BotaoCancelar, BotaoPrincipal} from "../../../@material/Button";

const BotaoDetalhes = ({salvarDesabilitado}) => {
    const {id} = useParams();
    const history = useHistory();

    function cancelar() {
        history.goBack();
    }

    return (
        <div className='buttonContainer' style={{display: "flex", justifyContent: "flex-end", marginTop: '20px', gap: "1rem"}}>
            <BotaoCancelar
                data-testid="btnCancelar"
                variant="contained"
                color="secondary"
                onClick={cancelar}
            >
                Cancelar
            </BotaoCancelar>

            <BotaoPrincipal
                data-testid="btnSalvar"
                variant="contained"
                color="primary"
                type="submit"
                disabled={salvarDesabilitado}
            >
                {id ? 'Alterar' : 'Cadastrar'}
            </BotaoPrincipal>
        </div>
    );
}

export default BotaoDetalhes;
