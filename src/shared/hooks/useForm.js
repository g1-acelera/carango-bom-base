import {useState} from "react";

const useForm = () => {
    const [valores, setValores] = useState({});
    function atualizaValor(event) {
        const {name, value} = event.target;

        setValores({
            ...valores,
            [name]: value
        });
    }
    return {atualizaValor, valores};
};

export default useForm;
