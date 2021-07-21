import React, {useEffect} from 'react';
import { useHistory, useParams } from 'react-router';

import {BotaoSalvar, BotaoCancelar} from '../../@material/Button'
import Marca from "./Marca";
import useForm from "../../shared/hooks/useForm";

import CampoDeTexto from '../../shared/components/CampoDeTexto'
import MarcaService from "../../services/MarcaService";

function CadastroMarca() {
    const {atualizaValor, valores, setValores} = useForm(Marca.initialValues());
    const history = useHistory();
    const {id} = useParams();

    function cancelar() {
        history.goBack();
    }

    useEffect(() => {
        if (id) {
            MarcaService.consultar(id)
                .then(dados => setValores(dados));
        }
    }, [id, setValores]);

    return (
        <form data-testid="form" onSubmit={(event) => {
            event.preventDefault();
            // if (possoEnviar()) {
            //     if (id) {
            //         MarcaService.alterar({ id, nome: marca })
            //             .then(res => {
            //                 history.goBack();
            //             });
            //     } else {
            //         MarcaService.cadastrar({ nome: marca })
            //             .then(res => {
            //                 setMarca("");
            //                 history.goBack();
            //             });
            //     }
            // }
        }}>
            <CampoDeTexto
                id="marca-nome"
                name="nome"
                label="Marca"
                value={valores.nome}
                error={Marca.validacoesNome(valores.nome)}
                required={true}
                onChange={atualizaValor}
            />
            <div className='buttonContainer'>
                <BotaoSalvar
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={Marca.ehModeloValido(valores)}
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
        </form>
    );
}

export default CadastroMarca;