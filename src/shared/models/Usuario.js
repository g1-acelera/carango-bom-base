import validaObrigatoriedade from '../../shared/validators/obrigatorio/obrigatorio';
import validaEmail from "../validators/email/validaEmail";

class Usuario {
    static initialValues() {
        return {
            email: "",
            senha: "",
        };
    }

    static validacoesEmail(valorDoCampo) {
        return validaEmail(valorDoCampo);
    }

    static ehVeiculoValido(valores) {
        return !this.validacoesEmail(valores?.email) && !validaObrigatoriedade(valores?.email)
            && !validaObrigatoriedade(valores?.senha);
    }
}

export default Usuario;
