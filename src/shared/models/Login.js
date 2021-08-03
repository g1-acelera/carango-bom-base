import validaEmail from "../validators/email/email";

class LoginModelo {
    static valoresIniciais() {
        return {
            email: "",
            senha: "",
        }
    }

    static validacoesEmail(valorDoCampo) {
        return validaEmail(valorDoCampo);
    }

    static ehModeloValido(valores) {
        return !!this.validacoesEmail(valores?.email) || !this.valoresIniciais().email ||
            !this.valoresIniciais().senha;
    }
}

export default LoginModelo;
