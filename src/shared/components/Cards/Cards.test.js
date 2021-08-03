import {render, screen} from "@testing-library/react";
import React from "react";
import Cards from "./Cards";

let component;


describe("Test", () => {
    it("Validar veiculos null", () => {
        component = render(<Cards veiculos={null}/>);
        const form = screen.getByTestId("divCards");
        expect(form).toBeTruthy();
        expect(screen.queryByTestId("card")).toBeNull();
    });

    it("Validar veiculos undefined", () => {
        component = render(<Cards veiculos={undefined}/>);
        const form = screen.getByTestId("divCards");
        expect(form).toBeTruthy();
        expect(screen.queryByTestId("card")).toBeNull();
    });

    it("Validar veiculos vazio", () => {
        let veiculos = [];
        component = render(<Cards veiculos={veiculos}/>);
        const form = screen.getByTestId("divCards");
        expect(form).toBeTruthy();
        expect(screen.queryByTestId("card")).toBeNull();
    });

    it("Validar veiculos", () => {
      let veiculos = [
          {
            marca: "Teste",
            data: [20, 150, 5656]
          },
          {
            marca: "Teste 2",
            data: [20, 150, 5656]
          }]
        component = render(<Cards veiculos={veiculos}/>);
        const form = screen.getByTestId("divCards");
        expect(form).toBeTruthy();
        
    });
});
