import {render} from "@testing-library/react";
import Login from "./Login";

describe("Login testes", () => {
    it("Deve renderizar o componente", () => {
        const {getByText} = render(<Login/>);
        expect(getByText("Entrar")).toBeInTheDocument();
    });
});
