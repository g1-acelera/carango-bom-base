import {render} from "@testing-library/react";

import PaginaNaoEncontrada from "./PaginaNaoEncontrada";

describe("Página não encontrada testes", () => {
   it("Deve renderizar o componente", () => {
      const {getByTestId} = render(<PaginaNaoEncontrada/>);
      expect(getByTestId("pagina-nao-encontrada")).toBeInTheDocument();
   });

   it("Deve possuir o título 'Ops, esta página não existe'", () => {
      const {getByText} = render(<PaginaNaoEncontrada/>);
      expect(getByText("Ops, esta página não existe")).toBeInTheDocument();
   });

   it("Deve possuir uma imagem com a descrição 'Imagem página não encontrada'", () => {
      const {getByAltText} = render(<PaginaNaoEncontrada/>);
      expect(getByAltText("Imagem página não encontrada")).toBeInTheDocument();
   });
});