import "../../../config-test/config-test";
import {shallow} from "enzyme";
import CampoDeTexto from "./CampoDeTexto";
import TextField from "@material-ui/core/TextField";
import Marca from "../../models/Marca";

const setup = (value) => {
    const props = {
        id: "test_field",
        value: value,
        error: Marca.validacoesNome(value),
        helperText: "",
        onChange: jest.fn(),
    }

    const wrapper = shallow(<CampoDeTexto {...props} />)

    return {
        props,
        wrapper,
    };
};

describe("Teste do campo de texto", () => {
    it("Deve renderizar o componente", () => {
        const { wrapper, props } = setup("foo");
        expect(wrapper.exists()).toBeTruthy();
    });
    it("Deve possuir texto digitado", () => {
        const { wrapper, props } = setup("foo");
        expect(wrapper.find(TextField).props().value).toEqual("foo");
    });
    it("Deve exibir mensagem de campo obrigatorio quando vazio", () => {
        const { wrapper, props } = setup("");
        const textField = wrapper.find(TextField);
        expect(wrapper.find(TextField).props().helperText).toEqual("Campo obrigatório");
        expect(wrapper.find(TextField).props().error).toBeTruthy();
    });
    it("Deve exibir mensagem de tamanho minimo quando o texto for menor que 3 caracteres", () => {
        const { wrapper, props } = setup("te");
        const textField = wrapper.find(TextField);
        expect(wrapper.find(TextField).props().helperText).toEqual("Deve ter ao menos 3 letras");
        expect(wrapper.find(TextField).props().error).toBeTruthy();
    });
    it("Não deve exibir nenhuma mensagem de erro quando o campo respeitar todas as regras", () => {
        const { wrapper, props } = setup("test");
        const textField = wrapper.find(TextField);
        expect(wrapper.find(TextField).props().helperText).toBeFalsy();
        expect(wrapper.find(TextField).props().error).toBeFalsy();
    });
});