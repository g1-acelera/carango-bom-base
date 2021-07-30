import jwt_decode from 'jwt-decode';

const CHAVE = 'CARANGO_BOM_G1';

export function estaLogadoLocalStorage() {
    return !!usuarioIdLocalStorage();
}

export function setDadosUsuarioLocalStorage(dadosUsuario) {
    localStorage.setItem(CHAVE, JSON.stringify(dadosUsuario));
}

export function getDadosUsuarioLocalStorage() {
    return JSON.parse(localStorage.getItem(CHAVE));
}

export function limpaDadosUsuarioLocalStorage() {
    localStorage.clear();
}

export function usuarioIdLocalStorage() {
    if (!getDadosUsuarioLocalStorage()) return;
    const data = jwt_decode(getDadosUsuarioLocalStorage().token);
    return data.id;
}
