import API from "../shared/api/api.routes";

const VeiculoService = {
  listar() {
    return fetch(`${API}/veiculos`).then(r => r.json());
  },
  excluir(id) {
    return fetch((`${API}/veiculos/${id}`), {
      method: 'DELETE', 
      mode: 'cors'
    }).then(r => r.json());
  }
};

export default VeiculoService;