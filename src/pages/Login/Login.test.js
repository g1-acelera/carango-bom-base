import {render} from "@testing-library/react";
import Login from "./Login";

describe("Login testes", () => {
    it("Deve renderizar o componente", () => {
        const {getByTestId} = render(<Login/>);
        expect(getByTestId("titulo")).toBeInTheDocument();
    });

    it("Deve possuir o botão 'Entrar'", () => {
        const {getByTestId} = render(<Login/>);
        expect(getByTestId("botao-entrar")).toBeInTheDocument();
    });
});
