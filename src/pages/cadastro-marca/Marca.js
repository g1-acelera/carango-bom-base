import validaTamanhoMinimo from '../../shared/validators/tamanho-minimo/tamanho-minimo'
import validaObrigatoriedade from '../../shared/validators/obrigatorio/obrigatorio'

class Marca {
    static ehValido = false

    static modelo() {
        return {
            nome: '',
        }
    }
    static validacoesNome(valorDoCampo) {
        const validacao = validaTamanhoMinimo(valorDoCampo, 3) == ""|| validaObrigatoriedade(valorDoCampo) == ""
        this.ehValido = !validacao
        return validacao
    }
}

export default Marca;
