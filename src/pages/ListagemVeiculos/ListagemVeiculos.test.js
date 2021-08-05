import {render, screen, fireEvent} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import ListagemVeiculos from "./ListagemVeiculos";

beforeEach(() => {
   render(<MemoryRouter><ListagemVeiculos/></MemoryRouter>);
});

describe("Test", () => {
    it("Should render component", () => {
         const form = screen.getByTestId("telaListagem");
         expect(form).toBeTruthy();

    });

    it('Test click event', () => {
        const button = screen.getByTestId('fab-AddMarca');
        fireEvent.click(button);
    });
});
