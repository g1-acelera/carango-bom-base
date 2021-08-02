import React from "react";
import {act, renderHook} from "@testing-library/react-hooks";
import faker from "faker";

import useForm from "./useForm";

let dadosIniciais;

beforeEach(() => {
    dadosIniciais = {
        nome: faker.name.firstName(),
        email: faker.internet.email(),
    };
});

describe("Use form testes", () => {
    it("Deve inicializar com os valores padrões informados", () => {
        const {result} = renderHook(() => useForm(dadosIniciais));
        expect(result.current.valores).toStrictEqual(dadosIniciais);
    });

    it("Deve atualizar o valor", () => {
        const {result} = renderHook(() => useForm(dadosIniciais));
        const nome = faker.name.firstName();
        act(() => result.current.setValores(nome));
        expect(result.current.valores).toBe(nome);
    });
});
