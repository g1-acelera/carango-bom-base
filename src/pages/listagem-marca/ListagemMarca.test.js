import React from 'react';
import {shallow} from "enzyme";
import "../../config-test/config-test";
import ListagemMarcas from "./ListagemMarcas";

let component;

beforeAll(() => {
    component = shallow(<ListagemMarcas/>);
});

describe("Test", () => {
    it("Should render component", () => {

    });
});
