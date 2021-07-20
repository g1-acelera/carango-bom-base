import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";

import CadastroMarca from "./CadastroMarca";

let component;

beforeAll(() => {
    component = render(<MemoryRouter><CadastroMarca/></MemoryRouter>);
});

describe("Test", () => {
    it("Should render component", () => {
        const form = screen.getByTestId("form");
        expect(form).toBeTruthy();
    });
});
