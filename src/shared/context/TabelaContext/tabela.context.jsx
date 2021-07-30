import {createContext, useContext, useState} from "react";
import {estaLogado} from "../local-storage/local-storage";

export const TabelaContext = createContext({
    colunaDeAcoes,
    preFilteredRows,
    setGlobalFilter,
    globalFilter,
});

const AutenticacaoProvider = ({children}) => {
    const [globalFilter, setGlobalFilter] = useState({})
    const [colunaDeAcoes, setColunaDeAcoes] = useState(true)
    const [preFilteredRows, setPreFilteredRows] = useState({})
    const [setGlobalFilter, setSetGlobalFilter] = useState(() => {})

    return (
        <TabelaContext.Provider
            value={{globalFilter, colunaDeAcoes, preFilteredRows, setGlobalFilter}}
        >
            {children}
        </TabelaContext.Provider>
    );
}

export default AutenticacaoProvider;

export const useAutenticacaoContext = () => useContext(AutenticacaoContext);
