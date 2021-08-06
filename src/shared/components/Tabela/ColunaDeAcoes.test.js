import React from "react"
import {Router} from 'react-router-dom';
import ColunaDeAcoes from "./ColunaDeAcoes"
import {act, fireEvent, render, screen} from "@testing-library/react"

import fetchMock from "jest-fetch-mock"

fetchMock.enableMocks();

let componente
let mockService
let historyMock
let botaoExcluir
let botaoAlterar

beforeEach(() => {
    fetch.resetMocks();
    historyMock = {
        push: jest.fn(),
        go: jest.fn(),
        listen: jest.fn(),
        location: {}
    }
    mockService = jest.mock("../../../services/VeiculoService")
    componente = 
        <Router history={historyMock}>
            <ColunaDeAcoes 
                object_id={1}
                service={mockService}
                caminhoDoObjeto="objects"/>
        </Router>
    botaoExcluir = () => { return screen.getByTestId("botao-excluir") }
    botaoAlterar = () => { return screen.getByTestId("botao-alterar") }
})

describe("Testes da coluna de ações", () => {
    it("Deve renderizar botão de excluir", () => {
        render(componente)
        expect(botaoExcluir).toBeDefined();
    })
    it("Deve renderizar botão de alterar", () => {
        render(componente)
        expect(botaoAlterar).toBeDefined();
    })
    it("Deve abrir Dialogo ao clicar em excluir", () => {
        act(() => {
            render(componente)
            fireEvent.click(botaoExcluir())
        })
        expect(screen.getByTestId("dialogo-excluir")).toBeInTheDocument()
    })
    it("Não deve ter Dialogo na tela", () => {
        act(() => {
            render(componente)
        })
        expect(screen.queryByTestId("dialogo-excluir")).not.toBeInTheDocument()
    })
    it("Deve chamar Service.excluir ao confirmar exclusão no Dialogo", () => {
        mockService.excluir = jest.fn().mockImplementation(() => Promise.resolve({id: 29, nome: "Ford"}))
        act(() => {
            render(componente)
            fireEvent.click(botaoExcluir())
        })
        const botaoConfirmar = screen.getByTestId("botao-confirmar")
        fireEvent.click(botaoConfirmar)
        fetch.mockResponseOnce(JSON.stringify({id: 29, nome: "Ford"}))
        expect(mockService.excluir).toHaveBeenCalled()
    })
    it("Deve chamar history.push ao clicar em alterar", () => {
        act(() => {
            render(componente)
            fireEvent.click(botaoAlterar())
        })
        expect(historyMock.push).toHaveBeenCalled()
    })
})