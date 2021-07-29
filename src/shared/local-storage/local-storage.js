import jwt_decode from 'jwt-decode';

const CHAVE = 'CARANGO_BOM_G1';

export function estaLogado() {
    return !!usuarioId();
}

export function setDadosUsuario(dadosUsuario) {
    localStorage.setItem(CHAVE, JSON.stringify(dadosUsuario));
}

export function getDadosUsuario() {
    return JSON.parse(localStorage.getItem(CHAVE));
}

export function usuarioId() {
    if (!getDadosUsuario()) return;
    const data = jwt_decode(getDadosUsuario().token);
    return data.id;
}
