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
        <div className='buttonContainer' style={{ display: "flex", justifyContent: "space-between"}}>
            <BotaoPrincipal
                data-testid="btnSalvar"
                variant="contained"
                color="primary"
                type="submit"
                disabled={salvarDesabilidado}
                style={{ marginTop: '20px'}}
            >
                {id ? 'Alterar' : 'Cadastrar'}
            </BotaoPrincipal>

            <BotaoCancelar
                data-testid="btnCancelar"
                variant="contained"
                color="secondary"
                onClick={cancelar}
                style={{ marginTop: '20px'}}>
                Cancelar
            </BotaoCancelar>
        </div>
    );
}

export default BotaoDetalhes;
