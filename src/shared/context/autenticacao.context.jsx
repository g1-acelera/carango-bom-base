import {createContext, useContext, useState} from "react";
import {estaLogado} from "../local-storage/local-storage";

export const AutenticacaoContext = createContext({
    dadosUsuario: {},
    ehUsuarioLogado: estaLogado(),
    adicionaDadosUsuario: () => {},
    removeDadosUsuario: () => {},
});

const AutenticacaoProvider = ({children}) => {
    const [dadosUsuario, setDadosUsuario] = useState(undefined);
    const [ehUsuarioLogado, setEhUsuarioLogado] = useState(estaLogado());

    function adicionaDadosUsuario(dadosAdicionarUsuario) {
        setEhUsuarioLogado(true);
        setDadosUsuario(dadosAdicionarUsuario);
    }

    function removeDadosUsuario() {
        setEhUsuarioLogado(false);
        setDadosUsuario(undefined);
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
