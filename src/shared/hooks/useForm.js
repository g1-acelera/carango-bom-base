import {useCallback, useState} from "react";

const useForm = (valoresIniciais) => {
    const [valores, setValores] = useState({...valoresIniciais});
    const atualizaValor = useCallback((event) => {
        const {name, value} = event;
        setValores({
            ...valores,
            [name]: value
        });
    }, [setValores, valores]);
    return {atualizaValor, valores, setValores};
};

export default useForm;
