import {useParams} from "react-router";
import {useEffect, useState} from "react";

const useConsultaEntidade = (consultaServico) => {
    const [dadosConsultados, setDadosConsultados] = useState();
    const {id} = useParams();
    useEffect(async () => {
        if (!id) return;
        await consultaServico(id).then(dados => setDadosConsultados(dados));
    }, [id, consultaServico]);
    return {dadosConsultados};
};

export default useConsultaEntidade;
