import "../../../config-test/config-test";
import {shallow} from "enzyme";
import CampoDeTexto from "./CampoDeTexto";
import TextField from "@material-ui/core/TextField";
import validaObrigatoriedade from "../../validators/obrigatorio/obrigatorio";

const setup = () => {
    const props = {
        id: "teste",
        value: "foo",
        error: "",
        onChange: jest.fn(),
    }

    const wrapper = shallow(<CampoDeTexto {...props} />)

    return {
        props,
        wrapper,
    };
};

describe("Campo de texto testes", () => {
    /*it("Deve renderizar o componente", () => {
        expect(wrapper.exists()).toBeTruthy();
    });*/

    it("Deve possuir texto digitado", () => {
        const { wrapper, props } = setup();
        expect(wrapper.find(TextField).props().value).toEqual('foo');
    });

    /*it("Deve exibir mensagem de campo obrigatorio quando vazio", () => {
        // props.error =
        const textField = wrapper.find(TextField);
        console.log(textField)
        // textField.error = validaObrigatoriedade("");
        // expect(textField.helperText).toEqual('Campo obrigatório');
    });*/
});