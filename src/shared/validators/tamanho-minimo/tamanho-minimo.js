function validaTamanhoMinimo(valorDoCampo, tamanhoMinimo){
    if (!valorDoCampo) return ""
    return valorDoCampo.length >= tamanhoMinimo ? "" : `Deve ter ao menos ${tamanhoMinimo} letras`
}

export default validaTamanhoMinimo