import {getDadosUsuarioLocalStorage} from "../local-storage/local-storage";

export const CabelhoPadraoSemAutenticacao = {
    'Content-Type': 'application/json'
};

export const CabecalhoComAutenticacao = {
    'Content-Type': 'application/json',
    'Authorization': `${getDadosUsuarioLocalStorage()?.tipo} ${getDadosUsuarioLocalStorage()?.token}`
}

