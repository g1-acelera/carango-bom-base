import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";

import Dashboard from "./Dashboard";

let component;

beforeAll(() => {
    component = render(<MemoryRouter><Dashboard/></MemoryRouter>);
});

describe("Teste do Componente de Dashboard", () => {
    it("Deve renderizar componente", () => {
        const form = screen.getByTestId("divDashboard");
        expect(form).toBeTruthy();
    });
});
