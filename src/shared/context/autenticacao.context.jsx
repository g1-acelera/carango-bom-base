import {createContext, useContext, useState} from "react";
import {estaLogado} from "../local-storage/local-storage";

export const AutenticacaoContext = createContext({
    dadosUsuario: {},
    ehUsuarioLogado: estaLogado(),
    entra: () => {},
    sai: () => {},
});

const AutenticacaoProvider = ({children}) => {
    const [dadosUsuario, setDadosUsuario] = useState(undefined);
    const [ehUsuarioLogado, setEhUsuarioLogado] = useState(estaLogado());

    function entra(dadosUsuario) {
        setEhUsuarioLogado(true);
        setDadosUsuario(dadosUsuario);
    }

    function sai() {
        setEhUsuarioLogado(false);
        setDadosUsuario(undefined);
    }

    return (
        <AutenticacaoContext.Provider
            value={{dadosUsuario, ehUsuarioLogado, entra, sai}}
        >
            {children}
        </AutenticacaoContext.Provider>
    );
}

export default AutenticacaoProvider;

export const useAutenticacaoContext = () => useContext(AutenticacaoContext);
