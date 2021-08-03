import {useState} from "react";

const useForm = (valoresIniciais) => {
    const [valores, setValores] = useState({...valoresIniciais});

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
