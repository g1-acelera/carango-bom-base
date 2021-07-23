import {useParams} from "react-router";
import {useEffect, useState} from "react";

const useConsultaEntidade = (consultaServico) => {
    const [dadosConsultados, setDadosConsultados] = useState();
    const {id} = useParams();
    useEffect(() => {
        if (!id) return;
        consultaServico(id).then(dados => setDadosConsultados(dados));
    }, [id, consultaServico]);
    return {dadosConsultados};
};

export default useConsultaEntidade;
