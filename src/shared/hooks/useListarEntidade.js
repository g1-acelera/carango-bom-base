import {useEffect, useState} from "react";

const useListarEntidade = (listarServico) => {
    const [dadosConsultados, setDadosConsultados] = useState([]);
    useEffect(() => {
        listarServico().then(dados => {
            if (!dados || dados?.length <= 0) {
                setDadosConsultados([]);
                return;
            }
            setDadosConsultados(dados);
        });
    }, [listarServico, setDadosConsultados]);
    return {dadosConsultados};
}

export default useListarEntidade;
