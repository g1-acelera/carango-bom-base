import API from "../shared/api/api.routes";
import {CabelhoPadraoSemAutenticacao} from "../shared/fetch/Cabecalhos";

const LoginService = {
    login(dados) {
        return fetch(`${API}/auth`, {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: CabelhoPadraoSemAutenticacao,
        }).then(response => response.json());
    },
};

export default LoginService;