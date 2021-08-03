import {BotaoCancelar, BotaoSalvar} from "../../../@material/Button";
import React from "react";
import {useHistory, useParams} from "react-router";

const BotaoDetalhes = ({salvarDesabilidato}) => {
    const {id} = useParams();
    const history = useHistory();

    function cancelar() {
        history.goBack();
    }

    return (
        <div className='buttonContainer' style={{ display: "flex", justifyContent: "space-between"}}>
            <BotaoSalvar
                data-testid="btnSalvar"
                variant="contained"
                color="primary"
                type="submit"
                disabled={salvarDesabilidato}
                style={{ marginTop: '20px'}}
            >
                {id ? 'Alterar' : 'Cadastrar'}
            </BotaoSalvar>

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
