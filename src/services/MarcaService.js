import API from "../shared/api/api.routes";
import {CabecalhoComAutenticacao} from "../shared/fetch/Cabecalhos";

const MarcaService = {
  cadastrar(marca) {
    return fetch(`${API}/marcas`, {
      method: 'POST',
      body: JSON.stringify(marca),
      headers: CabecalhoComAutenticacao,
    }).then(response => response.json());
  },

  alterar(marca) {
    return fetch(`${API}/marcas/${marca.id}`, {
      method: 'PUT',
      body: JSON.stringify(marca),
      headers: CabecalhoComAutenticacao,
    }).then(response => response.json());
  },

  consultar(id) {
    return fetch(`${API}/marcas/${id}`).then(response => response.json());
  },

  listar() {
    return fetch(`${API}/marcas`).then(response => response.json());
  },

  excluir(id) {
    return fetch((`${API}/marcas/${id}`), {
      method: 'DELETE',
      headers: CabecalhoComAutenticacao,
    }).then(response => response.json());
  }
};

export default MarcaService;
