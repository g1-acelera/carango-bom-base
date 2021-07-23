import API from "../shared/api/api.routes";

const VeiculoService = {
  listar() {
    return fetch(`${API}/veiculos`)
      .then(r => r.json());
  },
};

export default VeiculoService;