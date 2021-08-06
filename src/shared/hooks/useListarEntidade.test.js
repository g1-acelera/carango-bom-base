import {renderHook} from "@testing-library/react-hooks";
import {waitFor} from "@testing-library/react";
import useListarEntidade from "./useListarEntidade";

const mockDados = [
    {
        email: "amanda@gmail.com",
    },
    {
        email: "connor@gmail.com",
    },
];

const listarServicoMock = () => Promise.resolve(mockDados);

describe("Listar entidade hook testes", () => {
    it("Deve retornar os dados", async () => {
        const {result} = await waitFor(() =>
            renderHook(() => useListarEntidade(listarServicoMock))
        );
        expect(result.current.dadosConsultados).toStrictEqual(mockDados);
    });

    it("Deve retornar todos os dados", async () => {
        const {result} = await waitFor(() =>
            renderHook(() => useListarEntidade(listarServicoMock))
        );
        expect(result.current.dadosConsultados.length).toBe(2);
    });
});
