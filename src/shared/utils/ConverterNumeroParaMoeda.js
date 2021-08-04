export default function converterNumeroParaMoeda(valor) {
    const valorConvertido = Number(valor);
  
    if (isNaN(valorConvertido)) return valor;
  
    return valorConvertido.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}