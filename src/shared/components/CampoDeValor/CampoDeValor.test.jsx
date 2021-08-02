import "../../../config-test/config-test";
import {shallow} from "enzyme";
import CampoDeValor from "./CampoDeValor";
import TextField from "@material-ui/core/TextField";
import Veiculo from "../../models/Veiculo";

const onChange = jest.fn();
const idProperty = "#test_field";
const valorMock = "90.900";

const setup = (value) => {
    const componentProps = CampoDeValor;
    const props = {
        id: "test_field",
        value: value,
        helperText: "",
        variant: "outlined",
        required: true,
        label: "Valor",
        fullWidth: true,
        InputProps: {inputComponent: componentProps},
        onChange: onChange,
    }

    const wrapper = shallow(<TextField {...props} />);

    return {
        props,
        wrapper,
    };
};

beforeEach(() => {
    jest.clearAllMocks();
  });

describe("Teste do campo de valor", () => {
    it("Deve renderizar o componente", () => {
        const { wrapper } = setup(valorMock);
        expect(wrapper.exists()).toBeTruthy();
    });
    it("Deve possuir texto digitado", () => {
        const { wrapper } = setup(valorMock);
        expect(wrapper.find(idProperty).props().value).toEqual(valorMock);
    });
    it("Deve chamar onChange quando haver alterações no valor digitado", () => {
        const { wrapper } = setup(valorMock);
        const novoValor = "9";
        const testField = wrapper.find(idProperty);
        testField.simulate('change', {target: {value: novoValor, focus: () => {}}});
        expect(onChange).toHaveBeenCalled();
    });
});