import API from "../shared/api/api.routes";

const MarcaService = {
  cadastrar(marca) {
    return fetch(`${API}/marcas`, {
      method: 'POST',
      body: JSON.stringify(marca),
      headers: {
      'Content-Type': 'application/json'
      }
    }).then(r => r.json());
  },

  alterar(marca) {
    return fetch(`${API}/marcas${marca.id}`, {
      method: 'PUT',
      body: JSON.stringify(marca)
    }).then(r => r.json());
  },

  consultar(id) {
    return fetch(`${API}/marcas/${id}`).then(r => r.json());
  },

  listar() {
    return fetch(`${API}/marcas`).then(r => r.json());
  },

  excluir(marca) {
    return fetch((`${API}/marcas${marca.id}`), {
      method: 'DELETE',
    })
      .then(r => r.json());
  }
};

export default MarcaService;