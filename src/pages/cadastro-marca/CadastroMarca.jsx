import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useErros from '../../hooks/useErros';
import MarcaService from '../../services/MarcaService';

import {BotaoSalvar, BotaoCancelar} from '../../@material/Button'

function CadastroMarca() {
    const [marca, setMarca] = useState("");
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

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    function cancelar() {
        history.goBack();
    }

    useEffect(() => {
        if (id) {
            MarcaService.consultar(id)
                .then(m => setMarca(m.nome));
        }
    }, [id]); // eslint-disable-line

    return (
        <form data-testid="form" onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                if (id) {
                    MarcaService.alterar({ id, nome: marca })
                        .then(res => {
                            history.goBack();
                        });
                } else {
                    MarcaService.cadastrar({ nome: marca })
                        .then(res => {
                            setMarca("");
                            history.goBack();
                        });
                }
            }
        }}>
            <TextField
                value={marca}
                onChange={evt => setMarca(evt.target.value)}
                onBlur={validarCampos}
                helperText={erros.marca.texto}
                error={!erros.marca.valido}
                name="marca"
                id="marca"
                label="Marca"
                type="text"
                variant="outlined"
                fullWidth
                required
                margin="normal"
            />

            <div className='buttonContainer'>
                <BotaoSalvar
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={!possoEnviar()}>
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