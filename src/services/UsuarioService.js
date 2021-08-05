import API from "../shared/api/api.routes";
import {CabecalhoComAutenticacao} from "../shared/fetch/Cabecalhos";

const UsuarioService = {
    cadastrar(usuario) {
        return fetch(`${API}/usuarios`, {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: CabecalhoComAutenticacao,
        }).then(response => response.json());
    },

    consultar(id) {
        return fetch(`${API}/usuarios/${id}`).then(response => response.json());
    },

    listar() {
        return Promise.resolve(
            [
                {
                    email: "amanda@gmail.com"
                }
            ]
        )
        return fetch(`${API}/usuarios`).then(response => response.json());
    },

    excluir(id) {
        return fetch((`${API}/usuarios/${id}`), {
            method: 'DELETE',
            headers: CabecalhoComAutenticacao,
        }).then(response => response.json());
    }
};

export default UsuarioService;
