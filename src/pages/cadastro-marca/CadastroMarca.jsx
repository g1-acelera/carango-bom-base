import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

import {BotaoSalvar, BotaoCancelar} from '../../@material/Button'
import Marca from "./Marca";
import useForm from "../../shared/hooks/useForm";

import CampoDeTexto from '../../shared/components/CampoDeTexto'

function CadastroMarca() {
    const {atualizaValor, valores} = useForm();
    const history = useHistory();
    const {id} = useParams();

    const validacoes = {
        marca: dado => {
            if (dado && dado.length >= 3) {
                return { valido: true };
            } else {
                return { valido: false, texto: "Marca deve ter ao menos 3 letras." }
            }
        }
    }

    function cancelar() {
        history.goBack();
    }

    useEffect(() => {
        if (id) {
            // MarcaService.consultar(id)
            //     .then(m => setMarca(m.nome));
        }
    }, [id]); // eslint-disable-line

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
                id={Marca.modelo().nome}
                name={Marca.modelo().nome}
                label="Marca"
                value={valores.nome}
                error={Marca.ehValido}
                required={true}
                onChange={atualizaValor}
                onBlur={Marca.validacoesNome(valores.nome)}
            />

            <div className='buttonContainer'>
                <BotaoSalvar
                    variant="contained"
                    color="primary"
                    type="submit"
                    // disabled={!possoEnviar()}
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