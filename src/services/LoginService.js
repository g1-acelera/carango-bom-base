import API from "../shared/api/api.routes";

const LoginService = {
    login(dados) {
        return fetch(`${API}/auth`, {
            method: 'POST',
            body: JSON.stringify(dados),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    },
};

export default LoginService;