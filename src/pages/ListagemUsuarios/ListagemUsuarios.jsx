import React from "react";
import Tabela from "../../shared/components/Tabela/Tabela";
import VeiculoService from "../../services/VeiculoService";
import {Box, Fab} from "@material-ui/core";
import ROTAS from "../../shared/constants/rotas.const";
import AddIcon from "@material-ui/icons/Add";
import useListarEntidade from "../../shared/hooks/useListarEntidade";
import UsuarioService from "../../services/UsuarioService";
import ListagemUsuarioColunasConst from "./ListagemUsuarioColunas.const";
import {fabStyles} from "../../@material/Button";
import {useHistory} from "react-router-dom";

const ListagemUsuarios = () => {
    const history = useHistory();
    const classes = fabStyles();
    const {dadosConsultados} = useListarEntidade(UsuarioService.listar);

    return (
        <Box minWidth="50%" maxWidth="100%" data-testid="listagem-usuarios">
            <Tabela
                columns={ListagemUsuarioColunasConst}
                data={dadosConsultados}
                colunaDeAcoes={false}
                service={VeiculoService}
            />
            <Fab
                data-testid="btn-novo-usuario"
                color="primary"
                aria-label="Adicionar usuário"
                className={classes.fab}
                onClick={() => history.push(ROTAS.CADASTRO_USUARIO)}
            >
                <AddIcon/>
            </Fab>
        </Box>
    );
}

export default ListagemUsuarios;
