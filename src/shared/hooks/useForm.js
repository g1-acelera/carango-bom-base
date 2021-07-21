import {useState} from "react";

const useForm = (initialValues) => {
    const [valores, setValores] = useState({...initialValues});
    function atualizaValor(event) {
        const {name, value} = event.target;
        setValores({
            ...valores,
            [name]: value
        });
    }
    return {atualizaValor, valores, setValores};
};

export default useForm;
