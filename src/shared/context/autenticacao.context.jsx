import {createContext, useContext, useState} from "react";
import {
    estaLogadoLocalStorage,
    limpaDadosUsuarioLocalStorage,
    setDadosUsuarioLocalStorage
} from "../local-storage/local-storage";

export const AutenticacaoContext = createContext({
    dadosUsuario: {},
    ehUsuarioLogado: estaLogadoLocalStorage(),
    adicionaDadosUsuario: () => {},
    removeDadosUsuario: () => {},
});

const AutenticacaoProvider = ({children}) => {
    const [dadosUsuario, setDadosUsuario] = useState(undefined);
    const [ehUsuarioLogado, setEhUsuarioLogado] = useState(estaLogadoLocalStorage());

    function adicionaDadosUsuario(dadosUsuario) {
        setEhUsuarioLogado(true);
        setDadosUsuario(dadosUsuario);
        setDadosUsuarioLocalStorage(dadosUsuario);
    }

    function removeDadosUsuario() {
        setEhUsuarioLogado(false);
        setDadosUsuario(undefined);
        limpaDadosUsuarioLocalStorage();
    }

    return (
        <AutenticacaoContext.Provider
            value={{dadosUsuario, ehUsuarioLogado, adicionaDadosUsuario, removeDadosUsuario}}
        >
            {children}
        </AutenticacaoContext.Provider>
    );
}

export default AutenticacaoProvider;

export const useAutenticacaoContext = () => useContext(AutenticacaoContext);
