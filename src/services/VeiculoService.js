import API from "../shared/api/api.routes";

const VeiculoService = {
  listar() {
    return fetch(`${API}/veiculos`)
      .then(r => r.json());
  },
  consultar(id) {
    return fetch(`${API}/veiculos/${id}`).then(r => r.json());
  },
  cadastrar(veiculo) {
    return fetch(`${API}/veiculos`, {
      method: 'POST',
      body: JSON.stringify(veiculo),
      headers: {
        'Content-Type': 'application/json'
        }
    }).then(r => 
      r.json());
  },
  alterar(veiculo) {
    return fetch(`${API}/veiculos/${veiculo.id}`, {
      method: 'PUT',
      body: JSON.stringify(veiculo)
    }).then(r => r.json());
  },
};

export default VeiculoService;