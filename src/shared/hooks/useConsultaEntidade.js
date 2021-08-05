import {useParams} from "react-router";
import {useEffect, useState} from "react";

const useConsultaEntidade = (consultaServico) => {
  const [dadosConsultados,
    setDadosConsultados] = useState();
  const {id} = useParams();
  
  useEffect(() => {
    async function loadData() {
      if (!id) 
        return;
      await consultaServico(id).then(dados => setDadosConsultados(dados));
    }
    loadData();
  }, [id, consultaServico]);
  
  return {dadosConsultados};
};

export default useConsultaEntidade;
