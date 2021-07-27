import {DashboardOutlined, CommuteOutlined, CopyrightOutlined} from '@material-ui/icons';
import ROTAS from "../../../constants/rotas.const";

const MENU_ITEM = [
    {
        nome: "Dashboard",
        icone: <DashboardOutlined/>,
        url: ROTAS.INICIAL
    },
    {
        nome: "Veículos",
        icone: <CommuteOutlined/>,
        url: ROTAS.VEICULOS
    },
    {
        nome: "Marcas",
        icone: <CopyrightOutlined/>,
        url: ROTAS.MARCAS
    },
];

export default MENU_ITEM;
