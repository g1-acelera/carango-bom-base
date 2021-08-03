import React, {Suspense} from "react";
import {render, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router";
import Dashboard from "../Dashboard/Dashboard";
import CadastroMarca from "../CadastroMarca/CadastroMarca";
import ListagemMarcas from "../ListagemMarca/ListagemMarcas";
import ListagemVeiculos from "../ListagemVeiculos/ListagemVeiculos";
import ROTAS from "../../shared/constants/rotas.const";
import MenuLateralContainer from "./MenuLateralContainer";
import {AutenticacaoProviderMock} from "../../shared/test-utils/autenticacao-context-consumer";
import PaginaNaoEncontrada from "../PaginaNaoEncontrada/PaginaNaoEncontrada";

jest.mock("../Dashboard/Dashboard");
jest.mock("../CadastroMarca/CadastroMarca");
jest.mock("../ListagemMarca/ListagemMarcas");
jest.mock("../ListagemVeiculos/ListagemVeiculos");
jest.mock("../PaginaNaoEncontrada/PaginaNaoEncontrada");

const ComponenteContainer = (rotaInicial) => {
    return render(
        <AutenticacaoProviderMock>
            <Suspense fallback={<></>}>
                <MemoryRouter initialEntries={[rotaInicial]}>
                    <MenuLateralContainer/>
                </MemoryRouter>
            </Suspense>
        </AutenticacaoProviderMock>
    );
};

describe("Menu lateral container testes", () => {
    it("Deve iniciar na página definida como padrão", async () => {
        Dashboard.mockImplementation(() => <div>Dashboard mock</div>);
        const {getByText} = ComponenteContainer(ROTAS.INICIAL);
        const titulo = await waitFor(() => getByText(/Dashboard mock/i));
        expect(titulo).toBeInTheDocument();
    });

    it("Deve navegar para cadastro de marca", async () => {
        CadastroMarca.mockImplementation(() => <div>Cadastro de marca mock</div>);
        const {getByText} = ComponenteContainer(ROTAS.CADASTRO_MARCA);
        const titulo = await waitFor(() => getByText(/Cadastro de marca mock/i));
        expect(titulo).toBeInTheDocument();
    });

    it("Deve navegar para alteração de marca", async () => {
        CadastroMarca.mockImplementation(() => <div>Alteração de marca mock</div>);
        const {getByText} = ComponenteContainer(ROTAS.ALTERACAO_MARCA);
        const titulo = await waitFor(() => getByText(/Alteração de marca mock/i));
        expect(titulo).toBeInTheDocument();
    });

    it("Deve navegar para listagem de marcas", async () => {
        ListagemMarcas.mockImplementation(() => <div>Listagem de marcas mock</div>);
        const {getByText} = ComponenteContainer(ROTAS.MARCAS);
        const titulo = await waitFor(() => getByText(/Listagem de marcas mock/i));
        expect(titulo).toBeInTheDocument();
    });

    it("Deve navegar para listagem de veículos", async () => {
        ListagemVeiculos.mockImplementation(() => <div>Listagem de veículos mock</div>);
        const {getByText} = ComponenteContainer(ROTAS.VEICULOS);
        const titulo = await waitFor(() => getByText(/Listagem de veículos mock/i));
        expect(titulo).toBeInTheDocument();
    });

    it("Deve navegar para página não encontrada", async () => {
        PaginaNaoEncontrada.mockImplementation(() => <div>Página não encontrada mock</div>);
        const {getByText} = ComponenteContainer("/essa-rota-nao-existe");
        const titulo = await waitFor(() => getByText(/Página não encontrada mock/i));
        expect(titulo).toBeInTheDocument();
    });
});
