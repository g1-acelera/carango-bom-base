import validaTamanhoMinimo from '../../shared/validators/tamanho-minimo/tamanho-minimo'
import validaObrigatoriedade from '../../shared/validators/obrigatorio/obrigatorio'

class Veiculo {
    static initialValues() {
        return {
            modelo: "",
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

    static ehVeiculoValido(valores) {
        return !!this.validacoesNome(valores?.modelo);
    }
}

export default Veiculo;
