import {render, screen, fireEvent} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import ListagemMarcas from "./ListagemMarcas";

beforeEach(() => {
   render(<MemoryRouter><ListagemMarcas/></MemoryRouter>);
});

describe("Test", () => {
    it("Should render component", () => {
         const form = screen.getByTestId("telaMarcaListagem");
         expect(form).toBeTruthy();

    });

    it('Test click event', () => {
        const button = screen.getByTestId('fab-AddMarca');
        fireEvent.click(button);
    });
});
