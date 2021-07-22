import validaTamanhoMinimo from '../../shared/validators/tamanho-minimo/tamanho-minimo'
import validaObrigatoriedade from '../../shared/validators/obrigatorio/obrigatorio'

class Marca {
    static initialValues() {
        return {
            nome: ""
        }
    }

    static validacoesNome(valorDoCampo) {
        const tamanhoMinimo = validaTamanhoMinimo(valorDoCampo, 3)
        const obrigatorio = validaObrigatoriedade(valorDoCampo)
        return tamanhoMinimo ? tamanhoMinimo : obrigatorio
    }

    static ehModeloValido(valores) {
        return !!this.validacoesNome(valores?.nome);
    }
}

export default Marca;
