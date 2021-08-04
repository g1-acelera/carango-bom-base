import React from "react";
import {Typography} from "@material-ui/core";

import estilos from "./PaginaNaoEncontrada.module.css";
import NaoEncontrado from "../../assets/nao-encontrado.svg";

const PaginaNaoEncontrada = () => {
    return (
        <div data-testid="pagina-nao-encontrada" className={estilos.pagina__container}>
            <Typography variant="h2" color="primary" className={estilos.pagina__titulo}>
                Ops, esta página não existe
            </Typography>
            <img
                src={NaoEncontrado}
                alt="Imagem página não encontrada"
                loading="lazy"
                className={estilos.pagina__imagem}
            />
        </div>
    );
}

export default PaginaNaoEncontrada;
