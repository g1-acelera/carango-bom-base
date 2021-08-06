import {DashboardOutlined, CommuteOutlined, CopyrightOutlined, PersonOutlined} from '@material-ui/icons';
import ROTAS from "../../../constants/rotas.const";

const MENU_ITEM = [
    {
        nome: "Dashboard",
        icone: <DashboardOutlined/>,
        url: ROTAS.DASHBOARD,
        autenticadoParaVisualizar: true,
        testeId: "item-dashboard"
    },
    {
        nome: "Veículos",
        icone: <CommuteOutlined/>,
        url: ROTAS.VEICULOS,
        autenticadoParaVisualizar: false,
        testeId: "item-veiculos"
    },
    {
        nome: "Marcas",
        icone: <CopyrightOutlined/>,
        url: ROTAS.MARCAS,
        autenticadoParaVisualizar: true,
        testeId: "item-marcas"
    },
    {
        nome: "Usuários",
        icone: <PersonOutlined/>,
        url: ROTAS.USUARIOS,
        autenticadoParaVisualizar: true,
        testeId: "item-usuarios"
    },
];

export default MENU_ITEM;
