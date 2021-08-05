import validaTamanhoMinimo from '../../shared/validators/tamanho-minimo/tamanho-minimo'
import validaObrigatoriedade from '../../shared/validators/obrigatorio/obrigatorio'

class Veiculo {
    static initialValues() {
        return {
            nome: "",
            marcaId: "",
            valor: "",
            ano: ""
        }
    }

    static validacoesNome(valorDoCampo) {
        const tamanhoMinimo = validaTamanhoMinimo(valorDoCampo, 3)
        const obrigatorio = validaObrigatoriedade(valorDoCampo)
        return tamanhoMinimo ? tamanhoMinimo : obrigatorio
    }

    static validacaoValor(valorDoCampo) {
        return validaObrigatoriedade(valorDoCampo)
    }

    static ehVeiculoValido(valores) {
        return !this.validacoesNome(valores?.nome) && !validaObrigatoriedade(valores?.marcaId) 
        && !validaObrigatoriedade(valores?.valor) && !validaObrigatoriedade(valores?.ano);
    }
}

export default Veiculo;
