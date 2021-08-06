import {useEffect, useState} from "react";

const useListarEntidade = (listarServico) => {
    const [dadosConsultados, setDadosConsultados] = useState([]);
    useEffect(() => {
        listarServico().then(dados => setDadosConsultados(dados));
    }, [listarServico, setDadosConsultados]);
    return {dadosConsultados};
}

export default useListarEntidade;
